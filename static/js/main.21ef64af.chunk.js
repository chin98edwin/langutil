(this["webpackJsonpdocs-src"]=this["webpackJsonpdocs-src"]||[]).push([[1],{1:function(e,t,n){"use strict";n.r(t);var a={primary:"#0e708e",grey:"#596881"},o=function(e){return function(t){return"v".concat(e,"/basic/").concat(t)}},r=function(e){return function(t){return"v".concat(e,"/api/").concat(t)}},i=function(e){return function(t){return"v".concat(e,"/advanced/").concat(t)}},l={v3:{installation_setup:o(3)("installation-setup"),basic_usage:o(3)("basic-usage"),insert_parameters:o(3)("insert-parameters"),apply_casings:o(3)("apply-casings"),apply_transformation:o(3)("apply-transformation"),init:r(3)("init"),setDictionary:r(3)("set-dictionary"),setLanguage:r(3)("set-language"),localize:r(3)("localize"),getCurrentLanguage:r(3)("get-current-language"),getDefinedLanguages:r(3)("get-defined-languages"),autoDetect:r(3)("auto-detect"),logs:r(3)("logs"),isAuto:r(3)("is-auto"),createKey:r(3)("create-key"),getLanguage:r(3)("get-language"),localizeWith:r(3)("localize-with"),snoozeInspectionUntil:r(3)("snooze-inspection-until"),localizable:r(3)("localizable"),withLang:r(3)("with-lang"),alternative_syntax:i(3)("alternative-syntax"),localizing_jsx:i(3)("localizing-jsx"),theUnavailableDocument:"v3/unavailable/document"}},c={root:"/",home:"/home",docs:"/docs",changelog:"/changelog",builder:"/builder"},s={githubRepo:"https://github.com/chin98edwin/langutil",npmPage:"https://www.npmjs.com/package/langutil",reactKawaiiHomePage:"https://react-kawaii.now.sh",dictionaryTemplateLink:"https://github.com/chin98edwin/langutil/tree/master/dictionary",defaultHashCharset:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",notAvailableDash:"-/-"},u={footerHeight:200,docsidebarContainerPadding:16,navbarHeight:54,compactWidthThreshold:800,v240DeprecatedRemovalDate:new Date("2020/03/01"),DERIVED:{reactKawaiiLarge:function(){return window.innerHeight/3}}};n.d(t,"COLORS",(function(){return a})),n.d(t,"DOCPATHS",(function(){return l})),n.d(t,"PATHS",(function(){return c})),n.d(t,"STRINGS",(function(){return s})),n.d(t,"VALUES",(function(){return u}))},19:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"i",(function(){return _})),n.d(t,"h",(function(){return E})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return d})),n.d(t,"k",(function(){return A})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"n",(function(){return h})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return p}));var a=n(6),o=n(0),r=n.n(o),i=n(9),l=(n(68),function(e){var t=e.className,n=e.children,o=Object(a.a)(e,["className","children"]);return r.a.createElement("h1",Object.assign({className:["document-h1",t].join(" "),children:n},o))}),c=function(e){var t=e.className,n=e.children,o=Object(a.a)(e,["className","children"]);return r.a.createElement("h2",Object.assign({className:["document-h2",t].join(" "),children:n},o))},s=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return r.a.createElement("p",Object.assign({className:["document-body",t].join(" ")},n))},u=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return r.a.createElement("table",Object.assign({className:["document-body document-table",t].join(" "),border:"1",cellPadding:10,cellSpacing:0},n))},_=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return r.a.createElement("thead",Object.assign({className:["document-thead",t].join(" ")},n))},E=function(e){return r.a.createElement("tbody",e)},m=function(e){return r.a.createElement("th",e)},d=function(e){return r.a.createElement("tr",e)},A=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return r.a.createElement("td",Object.assign({className:["document-td",t].join(" ")},n))},O=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return r.a.createElement("code",Object.assign({className:["document-code code",t].join(" ")},n))},g=function(e){var t=e.className,n=e.to,o=Object(a.a)(e,["className","to"]);return r.a.createElement(i.b,{className:"document-code-link",to:n},r.a.createElement("code",Object.assign({className:["document-code code",t].join(" ")},o)))},h=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return r.a.createElement("ul",Object.assign({className:["document-body",t].join(" ")},n))},f=function(e){return r.a.createElement("li",e)},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))};Document},31:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(2),i=n(19),l=n(4),c=n(1);n(76);t.a=function(){return o.a.createElement(i.a,{className:"react-kawaii-promo-text",children:Object(r.localize)({keyword:"REACT_KAWAII_PROMO_TEXT",transform:Object(l.h)({link:o.a.createElement("a",{href:c.STRINGS.reactKawaiiHomePage,target:"_blank",rel:"noopener noreferrer",children:"React Kawaii"})})})})}},32:function(e,t,n){(function(t){var a=n(1).STRINGS;e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.defaultHashCharset;n+=1;for(var r=t.from(e),i=0,l=0;l<n;l++){var c=l%r.length;i+=r[c]}for(var s=[],u=0;u<n;u++){var _=r.length*(u+1)%o.length;_+=i%(u+1)*Math.pow(u,2),s.push(_)}for(var E=0;E<r.length;E++){var m=E%n,d=r[E];d+=E<e.length-1?r[E+1]:r[E][0],d+=r.length%(r.length-E),s[m]+=d}for(var A=0;A<s.length;A++){var O=s[A]%o.length;s[A]=o[O]}return s.join("")}}).call(this,n(72).Buffer)},33:function(e,t,n){"use strict";var a=n(21),o=n(6),r=n(0),i=n.n(r),l=n(39),c=n.n(l);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.children,n=e.once,a=e.partialVisibility,r=void 0===a||a,l=e.transitionDuration,s=void 0===l?150:l,_=e.contentContainerStyle,E=Object(o.a)(e,["children","once","partialVisibility","transitionDuration","contentContainerStyle"]);return i.a.createElement(c.a,Object.assign({},u({once:n,partialVisibility:r},E),{children:function(e){var n=e.isVisible;return i.a.createElement("div",{style:u({opacity:n?1:0,transitionDuration:"".concat(s/1e3,"s")},_),children:t})}}))}},4:function(e,t,n){"use strict";var a=n(0),o=function(e){return function(t){return Object(a.createElement)(t,e)}},r=n(21);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var l={},c={setItem:function(e){l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l,{},e)},getItem:function(e){return l[e]},removeItem:function(e){delete l[e]}},s=(n(32),function(e){return"title-".concat(e)}),u=n(1);var _=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.STRINGS.defaultHashCharset,n="";n.length<e;)n+=t[Math.floor(Math.random()*t.length)];return n},E=n(2),m=function(e){return Object(E.localize)({keyword:e,casing:"titleCase"})},d=function(){return{v3:[{title:m("BASICS"),data:[{to:u.DOCPATHS.v3.installation_setup,text:m("INSTALLATION_AND_SETUP")},{to:u.DOCPATHS.v3.basic_usage,text:m("BASIC_USAGE")},{to:u.DOCPATHS.v3.insert_parameters,text:m("INSERT_PARAMETERS")},{to:u.DOCPATHS.v3.apply_casings,text:m("APPLY_CASINGS")},{to:u.DOCPATHS.v3.apply_transformation,text:m("APPLY_TRANSFORMATION")}]},{title:Object(E.localize)("API"),data:[{to:u.DOCPATHS.v3.init,text:"init"},{to:u.DOCPATHS.v3.setDictionary,text:"setDictionary"},{to:u.DOCPATHS.v3.setLanguage,text:"setLanguage"},{to:u.DOCPATHS.v3.localize,text:"localize"},{to:u.DOCPATHS.v3.getCurrentLanguage,text:"getCurrentLanguage"},{to:u.DOCPATHS.v3.getDefinedLanguages,text:"getDefinedLanguages"},{to:u.DOCPATHS.v3.autoDetect,text:"AUTO_DETECT"},{to:u.DOCPATHS.v3.isAuto,text:"isAuto"},{to:u.DOCPATHS.v3.withLang,text:"withLang"},{to:u.DOCPATHS.v3.logs,text:"logs"},{to:u.DOCPATHS.v3.createKey,text:"createKey"},{to:u.DOCPATHS.v3.getLanguage,text:"getLanguage"},{to:u.DOCPATHS.v3.localizeWith,text:"localizeWith"},{to:u.DOCPATHS.v3.snoozeInspectionUntil,text:"snoozeInspectionUntil"},{to:u.DOCPATHS.v3.localizable,text:"Localizable"}]}]}};var A=function(e,t){var n=window.location,a=n.href,o=n.origin,r=a.replace("".concat(o,"/#"),"");return t?r===e:r.includes(e)};function O(){window.scrollTo(0,0)}var g=function(e){setTimeout((function(){var t=document.getElementById(e);t&&window.scrollTo(0,t.offsetTop-1.5*u.VALUES.navbarHeight)}))};n.d(t,"h",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return _})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return g}))},40:function(e,t,n){e.exports=n.p+"static/media/langutil-icon.6370a5d2.svg"},41:function(e,t,n){e.exports=n.p+"static/media/github-icon.57b5d819.svg"},43:function(e,t,n){e.exports={en:n(85),ja:n(86),ms:n(87),zh:n(88)}},44:function(e,t,n){e.exports=n(89)},49:function(e,t,n){},68:function(e,t,n){},76:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){var a=n(0);e.exports={ADVANCED:"Advanced",ALTERNATIVE_SYNTAX:"Alternative syntax",API:"API",APP_BOUNDARY_ERROR_OCCURED:"We're sorry, an error occured.",APPLY_CASINGS:"Apply casings",APPLY_TRANSFORMATION:"Apply transformation",APPLYING_CASINGS_TO_YOUR_LOC_STR:"Applying casings to your localized strings",APPLYING_TRANSFORMATION_TO_YOUR_LOC_STR:"Applying transformation to your localized strings",API_DESC_CREATE_KEY:"Creates a key for your dictionary. This is used when structuring your dictionary by keywords instead of language in v2.",API_DESC_GET_CURRENT_LANG:"Get the currently set language.",API_DESC_GET_DEFINED_LANG:"Get the list of language that have been defined in the dictionary.",API_DESC_GET_LANG:"Get the currently set language.",API_DESC_INIT:function(e){var t=e.setD,n=e.setL;return a.createElement(a.Fragment,null,"Initialize langutil with a dictionary and language. Shorthand for ",t," and ",n,".")},API_DESC_IS_AUTO:"Determine if auto language detection is used.",API_DESC_LOCALIZABLE:"A wrapper component for rendering HTML/React elements.",API_DESC_LOCALIZE:"Maps a keyword to its localized value.",API_DESC_LOGS_FOCUS:"If you have chosen to hide away langutil logs but want to log a portion of code with it, place your code inside the callback.",API_DESC_LOGS_HIDE:"Hide logs from langutil.",API_DESC_LOGS_HIDE_VERBOSE:"Hide verbose logs from langutil.",API_DESC_LOGS_SHOW:"Show logs from langutil. Logs are shown by default.",API_DESC_LOGS_SHOW_VERBOSE:"Show verbose logs from langutil. Verbose logs are hidden by default.",API_DESC_SET_DICTIONARY:function(e){var t=e.init;return a.createElement(a.Fragment,null,"Sets the dictionary. We encourage using ",t," and not changing the contents of the dictionary in halfway. The only scenario you might need to use this function is if the dictionary is splitted up into sections for lazy loading.")},API_DESC_SET_LANGUAGE:"Sets the language.",API_DESC_AUTO_DETECT:function(e){var t=e.init,n=e.setL;return a.createElement(a.Fragment,null,"A detector function meant to be used in conjunction with ",t," or ",n,".")},API_DESC_SNOOZE_INSPECTION_UNTIL:"If your dictionary has not yet been completed and the warning about missing localizations bother you, you can use this to suppress the warning until a given date.",API_DESC_WITH_LANG:"A Higher-order component that allows your existing components to listen for changes in langutil and update themselves accordingly.",API_PARAM_DICT:"The object containing all localizations.",API_PARAM_DETECTOR:function(e){var t=e.auto;return a.createElement(a.Fragment,null,"A langutil built-in function, pass ",t," into this parameter to allow auto-language detection.")},API_PARAM_DUE:"The due date where warning will be shown again.",API_PARAM_FN:"The callback which you want langutil to focus its logs on.",API_PARAM_LANG:"The language to use.",API_PARAM_KEYWORD:"A short string representing the localized value.",API_PARAM_PARAM:"An array or object which each of their values can be swapped into localizations.",API_PARAM_CASING:"Casing styles that will be applied to the localized value if it is a string.",API_PARAM_TRANSFORM:"Apply a transformation to the localized value.",API_PARAM_WRAPPED_COMPONENT:"The component to be wrapped in.",API_PARAM_KEYWORD_LOCZ:"The keyword for localization.",API_PARAM_PARAMARRAY_LOCZ:"An array of parameters that can be passed into.",API_PARAM_ALLOW_EMPTY:"Ignore warnings about empty keywords.",API_PARAM_RENDER_AS_LOCZ:function(e){var t=e.span,n=e.renderAsVal;return a.createElement(a.Fragment,null,"Specify which type of HTML/React element you would like your localizations to be rendered into. By default it is rendered as a ",t,". To obtain the raw value of the localization, use ",n,".")},API_RTYPE_THE_LOCALIZED_VALUE:"The localized value.",API_RTYPE_ALL_LANG_FOUND_IN_DICT:"All languages found in the dictionary.",API_RTYPE_STR_REP_OF_LANG:"The string representation of the language.",API_RTYPE_A_KEYWORD_OBJ:"A keyword object.",API_RTYPE_LOGS_FOCUS:"True if the callback was sucessful.",BASIC_USAGE:"Basic usage",BASICS:"Basics",BUILDER:"Builder",CASING:"Casing",CASINGS:"Casings",CHANGELOG:"Changelog",CHANGELOG_ADAPTED_SYNTAX_FOR_COMMONJS:"Adapted syntax for CommonJS.",CHANGELOG_ADD_QUICKFIX_TO_DOC:"Added some quick fixes to the documentation.",CHANGELOG_ADD_UPDATE_HISTORY_TO_README:"Added Update History to Readme.",CHANGELOG_ADDED_84_NEW_LANG:function(e){var t=e.langs;return a.createElement(a.Fragment,null,"Added 84 new languages to auto detection algorithm: ",t,".")},CHANGELOG_ADDED_BACK_LEGACY_COMPENSATION:"Added back legacy compensation for old dictionary structure where it is arranged by keywords as an array.",CHANGELOG_ADDED_AUTO_SUGGESTIONS:function(e){var t=e.init,n=e.setL;return a.createElement(a.Fragment,null,"Added auto suggestions from the Language List to ",t," and ",n,".")},CHANGELOG_ADDED_CHINESE_CODE:function(e){var t=e.c;return a.createElement(a.Fragment,null,"Added the ",t," option to the Language List (not simplified ot traditional specific).")},CHANGELOG_ADDED_HIDELOGS:function(e){var t=e.hide;return a.createElement(a.Fragment,null,"Added a new ",t," function.")},CHANGELOG_CODE_OPTIMIZATIONS:"Code optimizations.",CHANGELOG_COMPLETE_REMOVAL_DEPRE_SET_MAR2020:"Complete removal of deprecated APIs set to be in March 2020.",CHANGELOG_CREATION_OF_LANGUTIL:"Creation of langutil with 3 core functions and the ability to auto-detect up to 128 languages.",CHANGELOG_DICT_INSP_NOT_HAPPEN_DEFAULT:"Dictionary inspection now do not happen by default in favor of performance.",CHANGELOG_EXAMPLES_REMOVED_FROM_DOC:"Examples have been removed from inline documentation as more detailed ones are already available in this readme file.",CHANGELOG_FIX_INCR_TYPE_REACT_ADD:function(e){var t=e.add;return a.createElement(a.Fragment,null,"Fixed incorrect typing in ",t,".")},CHANGELOG_FIXED_BUG_KEYWORD_REC_AS_INVALID:"Fixed a bug where certain valid keywords are recognized as invalid.",CHANGELOG_FIXED_ESC_PHDRS:function(e){var t=e.p,n=e.pp,o=e.k,r=e.kk;return a.createElement(a.Fragment,null,"Fixed issue where escaped placeholders do not level down if no param array or objects are provided (",n," \u2192 ",t," and ",r," \u2192 ",o,").")},CHANGELOG_FIXED_INCR_FN_NAME_AUTO_DETECT_NATIVE_ADD:function(e){var t=e.ad;return a.createElement(a.Fragment,null,"Fixed incorrect function name for ",t," in Native Additions.")},CHANGELOG_FIXED_INCORRECT_ESCAPER_SWAP:function(e){var t=e.p,n=e.q,o=e.p2;return a.createElement(a.Fragment,null,"Fixed the issue where the ",n,"s in localization will be replaced with ",t,"s. Previously, the algorithm temporarily swapped ",o," with ",n," to allow escaping ",t,".")},CHANGELOG_HIDELOGS_WILL_BE_DEPRECATED:function(e){var t=e.hL;return a.createElement(a.Fragment,null,t," will be deprecated in future versions in favor of a more flexible method.")},CHANGELOG_LANG_TABLE_MADE_COMPACT:"The Language List table has been made more compact. Native names of the languages have been removed since a few are not able to displayed properly on most devices unless additional fonts are installed.",CHANGELOG_LOC_FN_SIMPLIFIED:function(e){var t=e.loc;return a.createElement(a.Fragment,null,"Localizing function is now simplified to only one function: ",t,".")},CHANGELOG_MINOR_PERF_FIXES:"Minor performance fixes.",CHANGELOG_NEW_AUTO_DETECT_IMPLEMENTATION:function(e){var t=e.ad;return a.createElement(a.Fragment,null,"New ",t," implementation.")},CHANGELOG_NEW_SET_DICT_FN:function(e){var t=e.sd;return a.createElement(a.Fragment,null,"New ",t," function in case you want to lazy load your localizations.")},CHANGELOG_NEW_WITHLANG_HOC:function(e){var t=e.wl,n=e.locz;return a.createElement(a.Fragment,null,"New ",t," higher-order component in favor of ",n,".")},CHANGELOG_PERF_OPT_FOR_PROD_MODE:"Performance optimization for production mode.",CHANGELOG_SHOWLOG_WILL_BE_REPLACED_BY:function(e){var t=e.showL,n=e.lHide,o=e.lShow;return a.createElement(a.Fragment,null,t," (still usable) will be replaced by ",n," and ",o,".")},CHANGELOG_STRUCT_DICT_AS_OBJ:"Structure your dictionary by keywords or language in the shape of an object, langutil will automatically determine which method you're using.",CHANGELOG_WARN_FOR_PARAMOBJ_WILL_BE_SHOWN:"Warnings for params (object) that are not tally will now be shown.",CHANGELOG_WHEN_APPLY_CASING_ALLCAP_PRESERVED:"When applying casings, ALLCAPPED words and Names will be preserved.",COPY:"Copy",COPIED:"Copied",DEFAULT_VALUE:"Default value",DESCRIPTION:"Description",DEPRE_REMOVED_SINCE_VERSION:"(Removed in v{:ver})",DEPRE_TO_BE_REMOVED_BY_DATE:"(To be removed by {:date})",DEPRECATED:"Deprecated",DEPRECATED_MSG_CREATE_KEY:function(e){var t=e.dev,n=e.convert;return a.createElement(a.Fragment,null,"All dictionaries are now structured as objects. You will be able to use this function in conjuction with ",n," from the ",t," to re-structure the dictionary.")},DEPRECATED_MSG_GET_LANGUAGE:function(e){var t=e.getCL;return a.createElement(a.Fragment,null,"Use ",t," instead. Reason: The new naming gives a little more hint about what value the function is returning.")},DEPRECATED_MSG_LOCALIZABLE:function(e){var t=e.renderAs,n=e.locz,o=e.loc,r=e.withL;return a.createElement(a.Fragment,null,"The ",t," parameter that allows ",n," to render into anything complicates the code.",a.createElement("br",null),"Solution: Use ",o," as you normally would inside your JSX code. Then export your component with ",r," so that your components show the correct language when the user language has changed.")},DEPRECATED_MSG_LOCALIZE_WITH:function(e){var t=e.loc;return a.createElement(a.Fragment,null,"Use ",t," instead.")},DEPRECATED_MSG_SNOOZE_INSPECTION_UNTIL:function(e){var t=e.dev;return a.createElement(a.Fragment,null,"Dictionary inspection consumes a lot of computation power and it happens everytime langutil is initialized. This feature is now part of the ",t," so you can use it only when you need it instead.")},DOC_BODY_ADDITIONALLY_USE_CAN_USE_AUTO_DETECT:function(e){var t=e.autoDetect;return a.createElement(a.Fragment,null,"Additionally, you can use ",t," to let langutil figure out what language the device using.")},DOC_BODY_AS_YOU_BUILD_YOUR_PROJ:"As you build your project, you will realize that amount of localizations begin to increase exponentially, if not, by a lot! It is because of that, it is better to split localizations into different files then combined them in an index file.",DOC_BODY_BELOW_IS_COMPLETE_LIST_OF_CASINGS:"Below is a complete list of the casing styles that langutil provides.",DOC_BODY_BY_PASSING_IN_ARRAY_AS_OBJECT:function(e){var t=e.k;return a.createElement(a.Fragment,null,"By passing in an object as the second parameter, langutil will substitute each occurence of every key in the object it finds in the localized string. This is done in the format of ",t,".")},DOC_BODY_BY_PASSING_IN_ARRAY_AS_PARAM:function(e){var t=e.p;return a.createElement(a.Fragment,null,"By passing in an array as the second parameter, langutil will substitute each occurence of ",t," sequencially.")},DOC_BODY_CODE_BELOW_SHOWS_SIMPLE_EXAMPLE_COLON:"The code below shows a simple example of that:",DOC_BODY_TO_DISPLAY_P_IN_LOC:function(e){var t=e.p,n=e.escapedP;return a.createElement(a.Fragment,null,"Note: To display ",t," in your localizations, escape it with ",n,".")},DOC_BODY_IF_THE_BUILT_IN_CSTYLES_X_ENOUGH:"If the built-in casing styles aren't enough, you can add your own transformation to the localized value.",DOC_BODY_IN_YOUR_DIRECTORY:"In your project's directory, run either of the commands below:",DOC_BODY_INSERT_PARAM_INTRO:"In some cases, you might want to insert values into your localizations. While it is do-able by using string concatenation or replacing a marker in the localized string, it would be tedious to repeat this for such ocassions every time.",DOC_BODY_LANGUTIL_ALSO_ALLOW_STYLE_LOC:a.createElement(a.Fragment,null,"Langutil also allows you to styles localizations with different casings... just in ",a.createElement("i",{style:{opacity:.75}},"case"),"."),DOC_BODY_LANGUTIL_NEEDS_TO_BE_INIT:"Langutil needs to be initialized with a dictionary and language before it can be used.",DOC_BODY_LANGUTIL_PROVIDE_TWO_MTD_OVERCOME_ISSUE:"Langutil provides two methods to overcome this issue.",DOC_BODY_LOGS_NOT_SHOWN_IN_PROD:"NOTE: Logs, warnings and error messages from langutil are stripped away in the minified version. But don't worry, keeping these functions in your code while using the minified version will not throw an undefined error. ",DOC_BODY_EQUIVALENT_OF_LOCALIZE:function(e){var t=e.loc;return a.createElement(a.Fragment,null,"Currently the equivalent of the alternative syntax of ",t,".")},DOC_BODY_NOTE_DICT_LANG_KEYS_FORMAT:"Note that keywords in the dictionary should always be in UPPERCASE while the language should be in lowercase (Eg: 'en', 'en-US', 'english').",DOC_BODY_SETTING_UP_DESC:"Before you start, you will need to setup a dictionary first.",DOC_BODY_SETTING_UP_STRUCT_SUGGESTION:"We would suggest you to structure your dictionary according to the example below.",DOC_BODY_THEN_ADD_SOME_LOC:"Then add some localization into the language files.",DOC_BODY_TO_DISPLAY_KEY_IN_LOC:function(e){var t=e.k1,n=e.k2;return a.createElement(a.Fragment,null,"To display ",t," in your localizations, escape it with ",n,".")},DOC_BODY_USE_SETLANG_TO_SWITCH_LANG:function(e){var t=e.setL;return a.createElement(a.Fragment,null,"Use ",t," to switch between languages.")},DOC_BODY_USE_LOC_TO_TRANSLATE:function(e){var t=e.loc;return a.createElement(a.Fragment,null,"Use ",t," to translate your content.")},DOC_BODY_YOU_MAY_ADD_MORE_FILES:"You may add more files for other languages",DOC_BODY_IN_REACT_CALL_INIT_BEFORE_APP:function(e){var t=e.init,n=e.appjs,o=e.app;return a.createElement(a.Fragment,null,"In React, ",t," should be called in your entry file (presumably ",n,"), before and outside of ",o,".")},DOC_EXAMPLE_PRIMARY_LANG:"en",DOC_EXAMPLE_PRIMARY_LANG_NAME:"English",DOC_EXAMPLE_SECONDARY_LANG:"zh",DOC_EXAMPLE_SECONDARY_LANG_NAME:"Chinese",DOC_EXAMPLE_NAME_1:"John",DOC_EXAMPLE_NAME_2:"Jane",DOC_EXAMPLE_PARAM_ARR_HELLO_NAME:"Hello, %%p.",DOC_EXAMPLE_PARAM_ARR_HELLO_NAME_ACTUAL:"Hello, %p.",DOC_EXAMPLE_PARAM_ARR_HELLO_NAME_2:"Hello, %%p and %%p.",DOC_EXAMPLE_PARAM_ARR_HELLO_NAME_2_ACTUAL:"Hello, %p and %p.",DOC_EXAMPLE_PARAM_OBJ_HELLO_NAME:"Hello, {::name1}.",DOC_EXAMPLE_PARAM_OBJ_HELLO_NAME_ACTUAL:"Hello, {:name1}.",DOC_EXAMPLE_PARAM_OBJ_HELLO_NAME_2:"Hello, {::name1} and {::name2}.",DOC_EXAMPLE_PARAM_OBJ_HELLO_NAME_2_ACTUAL:"Hello, {:name1} and {:name2}.",DOC_NEXT_PARAM:"Next: %p \u25b6",DOC_PREV_PARAM:"\u25c0 Prev: %p",DOCS:"Docs",DOCUMENTATION:"Documentation",DYNAMIC_LOCALIZATIONS:"Dynamic localizations",EXTERNAL_LINKS:"External links",FAIL_COPY_DESC:"We're deeply sorry, an error occured. Please copy the item manually. ",FOOTER_COPYRIGHT:"Copyright \xa9 %p chin98edwin",FOLDER_STRUCTURE:"Folder structure",GET_STARTED:"Get started",HELLO_WORLD:"Hello world",HELLO_WORLD_SECONDARY:"\u54c8\u54af\u4e16\u754c",HERES_HOW_IT_WORKS_NUTSHELL:"Here's how it works in a nutshell",HOW_TO_USE_API:"How to use `%p`",HOW_TO_USE_API_REACT:"How to use `%p` (React)",ITS_THAT_SIMPLE:"It's that simple!",IN_YOUR_OWN_FILE_COLON:"In your own file:",INITIALIZING:"Initializing",INSERT_PARAMETERS:"Insert parameters",INSTALLATION:"Installation",INSTALLATION_AND_SETUP:"Installation & Setup",LIKE_THIS_KAWAII_IMG:function(e){var t=e.link;return a.createElement(a.Fragment,null,"Like this cute image? Check out ",t," for more.")},LOADING_ELLIPSIS:"Loading...",LOC_JS_MADE_SIMPLE:"Localization for JavaScript made simple",LOCALIZING_JSX:"Localizing JSX",LOREM_IPSUM:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",MONTH_0:"January",MONTH_1:"February",MONTH_2:"March",MONTH_3:"April",MONTH_4:"May",MONTH_5:"June",MONTH_6:"July",MONTH_7:"August",MONTH_8:"September",MONTH_9:"October",MONTH_10:"November",MONTH_11:"December",MONTH_YEAR:"{:month} {:year}",NORMAL_SYNTAX:"Normal syntax",ONE_OF_PARAMS:function(e){var t=e.params;return a.createElement(a.Fragment,null,"One of ",t)},OUTPUT:"Output",OUTPUT_HELLO_WORLD:"Output: Hello world",OR:"Or",ORIGINAL_BRACKET:"(Original)",PARAMETER:"Parameter",PARAMETERS:"Parameters",QUICK_LINKS:"Quick links",REACT_KAWAII_PROMO_TEXT:function(e){var t=e.link;return a.createElement(a.Fragment,null,"Like this cute image? Check out ",t," for more.")},RETURNS:"Returns",SOME_PARAMETER:"Some parameter",SWITCH_LANGUAGE:"Switch language",SWITCHING_LANGUAGES:"Switching languages",SWITCHING_BETWEEN_LANGUAGES:"Switching between languages",SETTING_UP:"Setting up",THE_QUICK_BROWN_FOX:"The quick brown fox jumped over the fence.",THIS_DOC_IS_UNAVAILABLE:"This document is unavailable",TYPE:"Type",USAGE:"Usage",USAGE_OF_OTHER_API_UNCHANGED:"Usage of other APIs remain unchanged",USING_NPM:"Using NPM",USING_YARN:"Using Yarn",VIEW_ON_NPM:"View on NPM",VIEW_ON_GITHUB:"View on GitHub",WEB:"Web",YOU_NEED_IMPORT_AD_IF_USING_RN:function(e){var t=e.dect,n=e.add,o=e.rn;return a.createElement(a.Fragment,null,"You need to import ",t," from ",n," in ",o)},YOUR_CODE_HERE:"Your code here"}},86:function(e,t){e.exports={LOREM_IPSUM:"\u3057\u304b\u3057\u79c1\u306f\u3001\u559c\u3073\u3092\u975e\u96e3\u3057\u3066\u82e6\u75db\u3092\u8cde\u8cdb\u3059\u308b\u3068\u3044\u3046\u8aa4\u3063\u305f\u3053\u306e\u8003\u3048\u304c\u3059\u3079\u3066\u3069\u306e\u3088\u3046\u306b\u3057\u3066\u8a95\u751f\u3057\u305f\u304b\u3092\u3042\u306a\u305f\u306b\u8aac\u660e\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u304b\u3089\u3001\u79c1\u306f\u3042\u306a\u305f\u306b\u305d\u306e\u4f53\u7cfb\u3092\u5b8c\u74a7\u306b\u8aac\u660e\u3057\u3001\u771f\u5b9f\u3092\u6c42\u3081\u308b\u5049\u5927\u306a\u63a2\u7a76\u5bb6\u3001\u4eba\u9593\u306e\u559c\u3073\u3092\u7bc9\u304f\u5efa\u7bc9\u5bb6\u306e\u5b9f\u8df5\u7684\u306a\u6559\u3048\u3092\u8a73\u3057\u304f\u8aac\u660e\u3057\u3088\u3046\u3002\u3060\u308c\u3082\u559c\u3073\u305d\u306e\u3082\u306e\u3092\u3001\u305d\u308c\u304c\u559c\u3073\u3067\u3042\u308b\u3068\u3044\u3046\u7406\u7531\u3067\u62d2\u3093\u3060\u308a\u3001\u5acc\u3063\u305f\u308a\u3001\u907f\u3051\u305f\u308a\u306f\u3057\u306a\u3044\u3002"}},87:function(e,t){e.exports={"":""}},88:function(e,t){e.exports={}},89:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(37),i=n.n(r),l=(n(49),n(2)),c=n.n(l),s=n(9),u=n(17),_=n(12),E=n(13),m=n(15),d=n(14),A=n(16),O=n(11),g=n(91),h=n(31),f=n(33),p=n(1),N=(n(80),function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={showHint:!1},n}return Object(A.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeoutRef=setTimeout((function(){e.setState({showHint:!0})}),3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeoutRef)}},{key:"render",value:function(){var e=this.state.showHint;return o.a.createElement(f.a,null,o.a.createElement("div",{className:"loader-container"},o.a.createElement("div",{className:"loader-subcontainer"},o.a.createElement(g.a,{size:p.VALUES.DERIVED.reactKawaiiLarge(),mood:"excited",color:p.COLORS.grey}),o.a.createElement("p",{className:"loader-text",children:Object(l.localize)("LOADING_ELLIPSIS"),style:{color:p.COLORS.grey}}),o.a.createElement("div",{style:{opacity:e?1:0,transitionDuration:"0.25s"}},o.a.createElement(h.a,null)))))}}]),t}(o.a.Component)),T=Object(O.withLang)(N),L=n(4),b=n(40),C=n.n(b),S=n(41),D=n.n(S);function I(){return o.a.createElement(s.b,{className:"navbar-navlink-container navbar-logo-container",to:p.PATHS.home,onClick:L.f},o.a.createElement("img",{className:"navbar-logo-img",src:C.a,alt:"Homepage"}),o.a.createElement("p",{style:{margin:0,marginBottom:"0.1em"}},o.a.createElement("span",{className:"navbar-logo-text",children:"langutil"})))}var v=function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={version:""},n.setVersion=function(e){var t=Object.keys(Object(L.c)())[0];setTimeout((function(){n.setState({version:e||t})}))},n}return Object(A.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.setVersion(),L.a.setItem({onDocVersionChange:this.setVersion})}},{key:"componentWillUnmount",value:function(){L.a.removeItem("onDocVersionChange")}},{key:"render",value:function(){var e=this.state.version,t=Object.keys(Object(L.c)())[0];return o.a.createElement("span",{className:"navbar-version-num",children:e||t})}}]),t}(o.a.Component);function P(e){var t=e.active,n=e.buttonProps,a=e.iconName,r=e.iconProps;return o.a.createElement("button",Object.assign({className:"navbar-navlink-button navbar-navlink-container navbar-squareitem-container",style:{backgroundColor:t?"#FFFFFF":"",width:p.VALUES.navbarHeight}},n),o.a.createElement("i",Object.assign({className:"material-icons navbar-navlink-button-text",children:a,style:{color:t?"#212833":""}},r)))}function y(){return o.a.createElement("a",{className:"navbar-navlink-container navbar-squareitem-container",href:p.STRINGS.githubRepo,target:"_blank",rel:"noopener noreferrer",style:{width:p.VALUES.navbarHeight},title:Object(l.localize)("VIEW_ON_GITHUB")},o.a.createElement("img",{className:"navbar-navlink-img",src:D.a,alt:Object(l.localize)("VIEW_ON_GITHUB")}))}n(81);var R=Object(u.g)((function(e){var t=e.to,n=e.exact,a=e.children,r=Object(L.e)(t,n);return o.a.createElement(s.b,{className:"navbar-navlink-container",to:t,onClick:L.f},o.a.createElement("div",{className:"navbar-navlink-text",children:a,style:{backgroundColor:r?"#000000":""}}),o.a.createElement("div",{className:"navbar-navlink-indicator",style:{height:r?"0.3em":0}}))}));var w=Object(O.withLang)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar-container",style:{gridTemplateColumns:"repeat(".concat(3,",auto) 1fr auto auto"),height:p.VALUES.navbarHeight}},o.a.createElement(I,null),o.a.createElement(R,{to:p.PATHS.docs},o.a.createElement("div",null,Object(l.localize)("DOCS"),o.a.createElement(v,null))),o.a.createElement(R,{to:p.PATHS.changelog},Object(l.localize)("CHANGELOG")),o.a.createElement("div",null),o.a.createElement(P,{iconName:"translate",active:!1,buttonProps:{onClick:function(){window.alert("Documentation in other languages coming soon!")},title:Object(l.localize)("SWITCH_LANGUAGE")}}),o.a.createElement(y,null)),o.a.createElement("div",{className:"navbar-container",style:{backgroundColor:"transparent",height:p.VALUES.navbarHeight,position:"relative",zIndex:0}}))})),H=n(42),G=n(19),M=(n(83),function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={reachedBottom:!1},n.checkScreenReachedBottom=Object(H.debounce)((function(){var e=window.innerHeight+window.scrollY-p.VALUES.footerHeight,t=document.body.offsetHeight-e,a=t<=0;n.state.reachedBottom!==a&&n.setState({reachedBottom:a});var o=Math.max(0,p.VALUES.footerHeight-t),r=L.a.getItem("onChangeFooterHeightInView");"function"===typeof r&&r(o)})),n}return Object(A.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.checkScreenReachedBottom)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.checkScreenReachedBottom)}},{key:"render",value:function(){var e=this.state.reachedBottom;return o.a.createElement(o.a.Fragment,null,e?o.a.createElement("div",{className:"footer-elem",style:{height:p.VALUES.footerHeight,opacity:0}}):null,o.a.createElement("footer",{className:"footer-elem",style:{bottom:e?0:"",height:p.VALUES.footerHeight,position:e?"fixed":"absolute"}},o.a.createElement("div",{className:"footer-container"},o.a.createElement("div",{className:"footer-upper-container"},o.a.createElement("div",{className:"footer-upper-column-container",style:{gridTemplateRows:"repeat(".concat(2,", auto) 1fr")}},o.a.createElement("p",{className:"footer-upper-column-title",children:Object(l.localize)("QUICK_LINKS",null,"upperCase")}),o.a.createElement(s.b,{className:"footer-links",to:p.PATHS.docs,children:Object(l.localize)("DOCUMENTATION"),onClick:L.f}),o.a.createElement(s.b,{className:"footer-links",to:p.PATHS.changelog,children:Object(l.localize)("CHANGELOG"),onClick:L.f})),o.a.createElement("div",{className:"footer-upper-column-container",style:{gridTemplateRows:"repeat(".concat(2,", auto) 1fr")}},o.a.createElement("p",{className:"footer-upper-column-title",children:Object(l.localize)("SWITCH_LANGUAGE",null,"upperCase")}),o.a.createElement("span",{className:"footer-links",children:"English (More coming soon)"})),o.a.createElement("div",{className:"footer-upper-column-container",style:{gridTemplateRows:"repeat(".concat(2,", auto) 1fr")}},o.a.createElement("p",{className:"footer-upper-column-title",children:Object(l.localize)("EXTERNAL_LINKS",null,"upperCase")}),o.a.createElement("a",{className:"footer-links",href:p.STRINGS.githubRepo,children:Object(l.localize)("VIEW_ON_GITHUB")}),o.a.createElement("a",{className:"footer-links",href:p.STRINGS.npmPage,children:Object(l.localize)("VIEW_ON_NPM")}))),o.a.createElement("div",{className:"footer-lower-container"},o.a.createElement(G.a,{className:"footer-copyright-text",children:Object(l.localize)("FOOTER_COPYRIGHT",[(new Date).getFullYear()])})))))}}]),t}(o.a.Component)),j=Object(O.withLang)(M),U=function(){return o.a.createElement(s.a,null,o.a.createElement(w,null),o.a.createElement(a.Suspense,{fallback:o.a.createElement(T,null)},o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:p.PATHS.root,component:F}),o.a.createElement(u.b,{path:p.PATHS.home,component:Y}),o.a.createElement(u.b,{path:"".concat(p.PATHS.docs,"/:version/:section/:id/:subId"),component:x}),o.a.createElement(u.b,{path:"".concat(p.PATHS.docs,"/:version/:section/:id"),component:x}),o.a.createElement(u.b,{path:"".concat(p.PATHS.docs,"/:version/:section"),component:z}),o.a.createElement(u.b,{path:"".concat(p.PATHS.docs,"/:version"),component:B}),o.a.createElement(u.b,{path:p.PATHS.docs,component:k}),o.a.createElement(u.b,{path:"".concat(p.PATHS.changelog,"/:subId"),component:W}),o.a.createElement(u.b,{path:p.PATHS.changelog,component:W}),o.a.createElement(u.b,{path:p.PATHS.root,component:F}))),o.a.createElement(j,null))},F=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,164))})),Y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,169))})),k=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,165))})),B=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,166))})),z=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,167))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,168))})),W=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,170))})),V=(n(84),function(e){function t(){var e,n;Object(_.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1},n.errorComponent=function(){return o.a.createElement("div",{className:"app-boundary-container"},o.a.createElement("p",{className:"app-boundary-text",children:Object(l.localize)("APP_BOUNDARY_ERROR_OCCURED")}))},n}return Object(A.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.state.error?o.a.createElement(this.errorComponent,null):this.props.children}}]),t}(o.a.Component));V.getDerivedStatefromError=function(){return{error:!0}};var X=Object(O.withLang)(V),K=n(43),J=n.n(K);c.a.init(J.a,"en",l.AUTO_DETECT);var Z=function(){return o.a.createElement(X,null,o.a.createElement(U,null))};i.a.render(o.a.createElement(Z,null),document.getElementById("root"))}},[[44,2,3]]]);
//# sourceMappingURL=main.21ef64af.chunk.js.map