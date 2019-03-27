/**
 * @author chin98edwin
 * @copyright Copyright (c) 2018 - 2019, chin98edwin
 * @description Localization for JavaScript made simple.
 * @version 2.1.0
**/

var CONFIG_ISDEV = false;
try {
    CONFIG_ISDEV = (process.env.NODE_ENV === 'development');
} catch (e) {/**/}
var CONFIG_LANGUAGE = 'en'; // The language to be used, default is 'en'
var CONFIG_DICTIONARY = {}; // Where all localizations are stored
var CONFIG_SHOWLOGS = CONFIG_ISDEV; // Decides if logs and warnings from langutil should be shown
var CONFIG_INITBYLANG = false;

const langutil = {

    init: function(dictionary, language, autoDetect) {
        if (!inspect.dictionaryIsEmpty(CONFIG_DICTIONARY) && CONFIG_SHOWLOGS) {
            console.warn('WARNING: You are re-initializing langutil');
            console.log(CONFIG_DICTIONARY);
        }
        if (Array.isArray(dictionary)) {
            CONFIG_INITBYLANG = false;
            var formattedDictionary = {};
            for (var i = 0; i < dictionary.length; i++) {
                const currentItem = dictionary[i];
                formattedDictionary[currentItem.keyword] = currentItem.localizations;
            }
            setDictionary(formattedDictionary);
        } else {
            CONFIG_INITBYLANG = true;
            setDictionary(dictionary);
        }
        this.setLanguage(language, autoDetect);
    },

    setLanguage: function(language, autoDetect) {
        language = autoDetect ? detectLanguage(language) : language;
        CONFIG_LANGUAGE = language;

        // Check if the dictionary contains localizations for the language
        if (CONFIG_SHOWLOGS) {
            var languageIsMissing = false;
            if (CONFIG_INITBYLANG) {
                languageIsMissing = CONFIG_DICTIONARY[language] === undefined;
            } else {
                const stringifiedDictionary = JSON.stringify(CONFIG_DICTIONARY);
                languageIsMissing = !stringifiedDictionary.includes('"' + language + '":');
            }
            if (languageIsMissing) {
                console.warn('The dictionary does not contain any localizations for "' + language + '". ');
            }
        }
    },

    createKey: function (keyword, localizations) {
        return {
            keyword: keyword,
            localizations: localizations
        };
    },

    localize: function(keyword, paramArray=[]) {
        var localizeSuccess = false;
        var localizedValue = keyword;
        try {
            localizedValue = localizedValue.toUpperCase();
            if (CONFIG_INITBYLANG) {
                localizedValue = CONFIG_DICTIONARY[CONFIG_LANGUAGE][keyword];
            } else {
                localizedValue = CONFIG_DICTIONARY[keyword][CONFIG_LANGUAGE];
            }
            if (typeof localizedValue === 'string') {
                localizedValue = stringWithParams(localizedValue, paramArray, CONFIG_SHOWLOGS);
            } else if (paramArray && CONFIG_SHOWLOGS) {
                console.warn('The localized value of ' + inspect.ellipsisQuote(keyword) + ' is ' + (typeof localizedValue) + ' but paramArray was provided, which it\'s values we are unable to pass into. ');
            }
            localizeSuccess = localizedValue !== undefined;
        } catch (e) {
            if (CONFIG_SHOWLOGS) {
                if (e instanceof TypeError && CONFIG_DICTIONARY.length !== 0) {
                    console.warn('The localization for the keyword "' + inspect.ellipsisQuote(keyword) + '" has not been set for "' + CONFIG_LANGUAGE + '". ');
                } else {
                    console.error(e);
                }
            }
        }
        return localizeSuccess ? localizedValue : ['_', keyword, '_'].join('');
    },

    localizeWith: function({ keyword, paramArray=[], casing, transform }) {
        var localized = this.localize(keyword, paramArray);
        // Localized value could be anything
        if (typeof localized === 'string') {
            // Apply casing transformation
            if (typeof casing === 'string') {
                const casingFunc = {
                    lowercase: (value) => value.toLowerCase(),
                    localeLowercase: (value) => value.toLocaleLowerCase(),
                    uppercase: (value) => value.toUpperCase(),
                    localeUppercase: (value) => value.toLocaleUpperCase(),
                    titleCase: (value) => {
                        try {
                            value = value.split(/[\s]/g);
                            for (var i = 0; i < value.length; i++) {
                                const currentWord = value[i].split('');
                                const firstLetter = currentWord.shift();
                                value[i] = [firstLetter.toUpperCase(), currentWord.join('')].join('');
                            }
                            value = value.join(' ');
                        } catch (e) {
                            if (CONFIG_SHOWLOGS) {
                                console.error(e);
                            }
                        }
                        return value;
                    },
                };
                const styleFunc = casingFunc[casing];
                if (styleFunc) {
                    localized = styleFunc(localized);
                } else if (CONFIG_SHOWLOGS) {
                    console.warn("Expected `style` to be one of 'normal', 'lowerCase', 'localeLowerCase', 'upperCase', 'localeUpperCase', 'titleCase' or 'allCaps' be got " + inspect.ellipsisQuote(casing) + " instead. ");
                }
            } else if (typeof casing !== 'string' && CONFIG_SHOWLOGS) {
                console.warn("Expected `style` to be one of 'normal', 'lowerCase', 'localeLowerCase', 'upperCase', 'localeUpperCase', 'titleCase' or 'allCaps' be got " + (typeof casing) + " instead. ");
            }
        }

        // Apply custom transformation
        if (typeof transform === 'function') {
            localized = transform(localized);
            if (typeof localized === 'undefined' && CONFIG_SHOWLOGS) {
                console.warn('Your `transform` function for ' + inspect.ellipsisQuote(keyword) + ' returns an undefined value. ');
            }
        } else if (CONFIG_SHOWLOGS) {
            console.error('Expected `transform` to be a function but got ' + (typeof transform) + ' instead. ');
        }
        return localized;
    },

    getLanguage: function() {
        return CONFIG_LANGUAGE;
    },

    getDefinedLanguages: function() {
        return getAllKeywordsAndDefinedLanguages(CONFIG_DICTIONARY).allLanguages;
    },

    logs: {

        hide: function() {
            CONFIG_SHOWLOGS = false;
        },

        show: function() {
            CONFIG_SHOWLOGS = true;
        }

    },

    /**
     * @todo Remove in June 2019
     */
    hideLogs: function() {
        if (CONFIG_SHOWLOGS) {
            console.warn('This method has been deprecated and will be completely removed in June 2019. Use langutil.logs.hide() instead. ');
        }
        CONFIG_SHOWLOGS = false;
    },

};

module.exports = langutil;

/**
 * @description Automatically determine the language used by the client's browser.
 * @param {Boolean} fallbackLanguage The language to be used if language could not be detected.
 * @todo If unable detect browser language, attempt to detect language by time zone.
 * @todo Detection if running in RN
 * @returns {String} The detected language.
 */
function detectLanguage(fallbackLanguage) {
    var languageFound = false;
    var langtoReturn = fallbackLanguage;
    try {
        var detectedLanguage = navigator.language || navigator.userLanguage;
        langtoReturn = detectedLanguage.toLowerCase();
    } catch (e) {
        if (CONFIG_SHOWLOGS) {
            if (e instanceof ReferenceError) {
                console.warn('You are probably using langutil in a non-browser environment. ');
            } else {
                console.error(e);
            }
        }
    }
    if (CONFIG_SHOWLOGS) {
        if (languageFound) {
            console.log('Auto-detected language: ' + langtoReturn);
        } else {
            console.warn('Failed to auto-detect language, setting language as \'' + fallbackLanguage + '\' instead. ');
        }
    }
    return langtoReturn;
}

/**
 * @description Retrieves all languages and keywords that are found in the dictionary.
 * @param {*} dictionary The dictionary destructure.
 * @returns { object } An object containing all defined languages and keywords.
 */
function getAllKeywordsAndDefinedLanguages(dictionary) {
    var allLanguages = [], allKeywords = [];
    if (CONFIG_INITBYLANG) {
        allLanguages = Object.keys(dictionary);
        for (i = 0; i < allLanguages.length; i++) {
            const languageSpecificLocalizations = dictionary[allLanguages[i]];
            allKeywords.push(...Object.keys(languageSpecificLocalizations));
        }
        allKeywords = [...new Set(allKeywords)]; // Remove duplicate keys
    } else {
        allKeywords = Object.keys(dictionary);
        for (i = 0; i < allKeywords.length; i++) {
            const keywordSpecificLangauges = dictionary[allKeywords[i]];
            allLanguages.push(...Object.keys(keywordSpecificLangauges));
        }
        allLanguages = [...new Set(allLanguages)]; // Remove duplicate keys
    }
    return { allLanguages: allLanguages, allKeywords: allKeywords };
}

/**
 * @description Generates a random strng of a fixed length.
 * @param {String} pattern The character set where random string will be generated from.
 * @param {Number} length The length of random string.
 * @returns {String} The randomized string.
 */
function getRandomString(pattern, length) {
    var newHash = '';
    do {
        var randomIndex = Math.floor(Math.random() * pattern.length);
        newHash += pattern[randomIndex];
    } while (newHash.length < length);
    return newHash;
}

/**
 * @description Replaces all occurences of %p in string with values from a set of arrays.
 * @param {String} stringWithFormat The string to be formatted.
 * @param {Array} [paramArray] An array of parameters that can be passed into the localization.
 * @param {Boolean} showLogs Controls whether logs should be shown.
 */
function stringWithParams (stringWithFormat, paramArray=[], showLogs) {
    // Escape character for %p with %%p
    // A random string that is non-existent in the current string is generated and swapped with
    var escape_p_Length = 2;
    var escape_p_swapper = '%q';
    while (stringWithFormat.includes(escape_p_swapper)) {
        try {
            escape_p_swapper = getRandomString('0123456789abcdef', escape_p_Length++);
        } catch (e) {/**/}
    }
    stringWithFormat = stringWithFormat.replace(/(%%p)/g, escape_p_swapper);

    // Detect real placeholders and substitute them with parameters
    var placeholders = /(%p)/g.exec(stringWithFormat);
    placeholders = placeholders ? placeholders : [];
    var placeholderCount = Math.min((placeholders.length + 1), paramArray.length);
    for (var i = 0; i < placeholderCount; i++) {
        stringWithFormat = stringWithFormat.replace(/(%p)/, paramArray[i]);
    }

    // ParamArray checking
    if (showLogs) {
        if (paramArray.length > placeholders.length) {
            console.warn('EXTRANEOUS PARAMETERS. Expected ' + placeholders.length + ' but received ' + paramArray.length + '. \nString: ' + stringWithFormat);
        } else if (paramArray.length < placeholders.length) {
            console.error('INSUFFICIENT PARAMETERS. Expected ' + placeholders.length + ' but received ' + paramArray.length + '. \nString: ' + stringWithFormat);
        }
    }

    // Replace empty placeholders with empty string
    stringWithFormat = stringWithFormat.replace(/(%p)/g, '');

    // Restore escaped %p
    stringWithFormat = stringWithFormat.replace(new RegExp('(' + escape_p_swapper + ')', 'g'), '%p');

    return stringWithFormat;
}

/**
 * @description Sets the dictionary to be used throughout the app.
 * This function should be called in the constructor() or componentWillMount() method.
 * For best practices, you should save your dictionary in a JSON file and import it into your app.
 * @param {object} dictionary The dictionary that will be used throughout the app for localization.
 */
function setDictionary(dictionary) {
    if (CONFIG_SHOWLOGS) {
        inspectDictionary(dictionary);
    }
    CONFIG_DICTIONARY = dictionary;
}

const inspect = {

    ellipsisQuote: function(value) {
        var newValue = value.substring(0, 20);
        newValue += (newValue.length < value.length) ? '...' : '';
        return '`' + newValue + '`';
    },

    dictionaryIsEmpty: function(newDictionary) {
        if (
            newDictionary === undefined ||
            newDictionary === null ||
            JSON.stringify(newDictionary) === '{}'
        ) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * @description Checks for unrecognized languages and show warning.
     * @param {Array} allLanguages The list of all languages that are mentioned in the dictionary.
     * @see http://4umi.com/web/html/languagecodes.php for list of languages.
     */
    unrecognizedLanguage: function(allLanguages) {
        var unrecognized = [];
        const langlist = ['af', 'sq', 'ar-sa', 'ar-iq', 'ar-eg', 'ar-ly', 'ar-dz', 'ar-ma', 'ar-tn', 'ar-om', 'ar-ye', 'ar-sy', 'ar-jo', 'ar-lb', 'ar-kw', 'ar-ae', 'ar-bh', 'ar-qa', 'eu', 'bg', 'be', 'ca', 'zh-tw', 'zh-cn', 'zh-hk', 'zh-sg', 'hr', 'cs', 'da', 'nl', 'nl-be', 'en', 'en-us', 'en-gb', 'en-au', 'en-ca', 'en-nz', 'en-ie', 'en-za', 'en-jm', 'en', 'en-bz', 'en-tt', 'et', 'fo', 'fa', 'fi', 'fr', 'fr-be', 'fr-ca', 'fr-ch', 'fr-lu', 'gd', 'gd-ie', 'de', 'de-ch', 'de-at', 'de-lu', 'de-li', 'el', 'he', 'hi', 'hu', 'is', 'id', 'it', 'it-ch', 'ja', 'ko', 'ko', 'lv', 'lt', 'mk', 'ms', 'mt', 'no', 'no', 'pl', 'pt-br', 'pt', 'rm', 'ro', 'ro-mo', 'ru', 'ru-mo', 'sz', 'sr', 'sr', 'sk', 'sl', 'sb', 'es', 'es', 'es-ar', 'es-gt', 'es-cr', 'es-pa', 'es-do', 'es-mx', 'es-ve', 'es-co', 'es-pe', 'es-ec', 'es-cl', 'es-uy', 'es-py', 'es-bo', 'es-sv', 'es-hn', 'es-ni', 'es-pr', 'sx', 'sv', 'sv-fi', 'th', 'ts', 'tn', 'tr', 'uk', 'ur', 've', 'vi', 'xh', 'ji', 'zu'];
        for (var i = 0; i < allLanguages.length; i++) {
            if (!langlist.includes(allLanguages[i])) {
                unrecognized.push(allLanguages[i]);
            }
        }
        if (unrecognized.length > 0) {
            console.warn('Unrecognized language codes found: \'' + unrecognized.join('\', \'') + '\'. \n' +
            'This is a no-op, but auto detection won\'t be able to make use of the localizations with the above mentioned codes. \n\nFor a list of recognized language codes, see https://github.com/chin98edwin/langutil#language-list. ');
        }
    },

    warnInvalidKeywords: function(invalidKeywords) {
        var plural_keyword = invalidKeywords.length > 1 ? 'keywords' : 'keyword';
        console.error('Invalid ' + plural_keyword + ' found in dictionary: "' +
        invalidKeywords.join('", "') + '"\nKeywords should only contain uppercase letters to prevent ambiguation. Underscores and numbers are allowed but not as the first character of the keyword. ');
    },

    /**
     * @description Checks if a keyword in the dictionary is valid.
     * @param {String} keywordToCheck The keyword of the dictionary
     * @returns {Boolean} true or false.
     */
    keywordIsValid: function(keywordToCheck) {
        var keywordFormat = /([A-Z]?[A-Z|_|0-9]?[A-Z|0-9])/g;
        var match = keywordToCheck.match(keywordFormat);
        if (match) {
            return keywordToCheck === match.join('');
        }
        return false;
    },

};

/**
 * @description Inspects the dictionary for errors.
 * @param {Object} newDictionary The dictionary that will be used throughout the app for localization.
 */
function inspectDictionary(newDictionary) {
    var i, j;

    // (1A) Check if dictionary is empty
    if (inspect.dictionaryIsEmpty(newDictionary)) {
        console.error('Dictionary is empty');
    }

    // (2) Extract all languages and keywords from dictionary
    var { allLanguages, allKeywords } = getAllKeywordsAndDefinedLanguages(newDictionary);

    // (3) Check dictionary for unrecognized language codes and show warning
    inspect.unrecognizedLanguage(allLanguages);

    // (4) Check for invalid keys
    var invalidKeywords = [];
    for (i = 0; i < allKeywords.length; i++) {
        if (!inspect.keywordIsValid(allKeywords[i])) {
            invalidKeywords.push(allKeywords[i]);
        }
    }
    if (invalidKeywords.length > 0) {
        inspect.warnInvalidKeywords(invalidKeywords);
    }

    // (5) Check for missing localizations
    var unlocalizedKeywords = {};
    for (i = 0; i < allKeywords.length; i++) {
        var unlocalizedLanguages = [];
        const currentKeyword = allKeywords[i];

        for (j = 0; j < allLanguages.length; j++) {
            const currentLanguage = allLanguages[j];

            // Get localization
            var currentLocalization = null;
            try {
                if (CONFIG_INITBYLANG) {
                    currentLocalization = newDictionary[currentLanguage][currentKeyword];
                } else {
                    currentLocalization = newDictionary[currentKeyword][currentLanguage];
                }
            } catch (e) { /* No action required */ }

            // Add language to unlocalized list
            if (currentLocalization === null || currentLocalization === undefined) {
                unlocalizedLanguages.push(currentLanguage);
            }
        }
        // Add keywords to unlocalized list
        if (unlocalizedLanguages.length > 0) {
            unlocalizedKeywords[currentKeyword] = unlocalizedLanguages;
            unlocalizedLanguages = []; // Reset unlocalized languages
        }
    }

    // (6) Show warnings
    const unlocalizedKeywordsIndex = Object.keys(unlocalizedKeywords);
    if (unlocalizedKeywordsIndex.length > 0) {
        var warning = '';
        for (i = 0; i < unlocalizedKeywordsIndex.length; i++) {
            warning += '\n • ' + unlocalizedKeywordsIndex[i] + ': ' + unlocalizedKeywords[unlocalizedKeywordsIndex[i]].join(', ');
        }
        console.warn('Found localizations with missing keywords: ' + warning);
    }

}