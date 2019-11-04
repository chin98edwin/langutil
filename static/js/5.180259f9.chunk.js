(this["webpackJsonpdocs-src"]=this["webpackJsonpdocs-src"]||[]).push([[5],{121:function(e,a,t){"use strict";var n=t(0),l=t(4);var i=function(e){Object(n.useLayoutEffect)((function(){"string"===typeof e&&Object(l.g)(Object(l.b)(e))}),[e])};t.d(a,"a",(function(){return i}))},160:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(19);a.default=function(){return{title:"v3",data:[{title:"3.0.1",data:[l.a.createElement(l.a.Fragment,null,"Fixed incorrect function name for ",l.a.createElement(i.b,null,"AUTO_DETECT")," in Native Additions."),l.a.createElement(l.a.Fragment,null,"Fixed issue where escaped placeholders do not level down if no param array or objects are provided (",l.a.createElement(i.b,null,"'%%p'")," \u2192 ",l.a.createElement(i.b,null,"'%p'")," and ",l.a.createElement(i.b,null,"'","{::key}","'")," \u2192 ",l.a.createElement(i.b,null,"'","{:key}","'"),")."),"When applying casings, ALLCAPPED words and Names will be preserved.","Complete removal of deprecated APIs set to be in March 2020.","Minor code optimizations."]},{title:"3.0.0",data:[l.a.createElement(l.a.Fragment,null,"Localizing function is now simplified to only one function: ",l.a.createElement(i.b,null,"localize()")),l.a.createElement(l.a.Fragment,null,"New ",l.a.createElement(i.b,null,"withLang()")," higher-order component in favor of ",l.a.createElement(i.b,null,"<Localizable />"),"."),l.a.createElement(l.a.Fragment,null,"New ",l.a.createElement(i.b,null,"AUTO_DETECT")," implementation."),"Dictionary inspection now do not happen by default in favor of performance.","Structure your dictionary by keywords or language in the shape of an object, langutil will automatically determine which method you're using.",l.a.createElement(l.a.Fragment,null,"New ",l.a.createElement(i.b,null,"setDictionary()")," function in case you want to lazy load your localizations.")]}]}}},161:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(1),r=t(19);a.default=function(){return{title:"v2",data:[{title:"2.4.0",data:[l.a.createElement(l.a.Fragment,null,l.a.createElement(r.b,null,"<Localizable />"),"  will update itself when ",l.a.createElement(r.b,null,"setLanguage()")," is called."),l.a.createElement(l.a.Fragment,null,"New ",l.a.createElement(r.b,null,"allowEmpty")," parameter to suppress warnings about empty keywords."),"Snooze dictionary inspection until a given date."]},{title:"2.3.3",data:["Fixed issue where already-warned keywords still show up in group warnings."]},{title:"2.3.2",data:["Grouped warnings for missing localizations.",l.a.createElement(l.a.Fragment,null,"You can pass in custom components via the ",l.a.createElement(r.b,null,"renderAs")," prop in React Native like how it can be done in React.")]},{title:"2.3.1",data:["Hot fix for a problem in TypeScript."]},{title:"2.3.0",data:["Internal optimization for better performance and debugging experience.",l.a.createElement(l.a.Fragment,null,"Automatic language detection for React Native is no longer included in the core to avoid conflict with webpack config in some cases. It has been splitted out as a function and can be imported from ",l.a.createElement(r.b,null,"'langutil/native-additions'"),"."),l.a.createElement(l.a.Fragment,null,"The ",l.a.createElement("a",{href:i.STRINGS.dictionaryTemplateLink,children:"repo",target:"_blank",rel:"noopener noreferrer"})," now includes template dictionaries, some of the most commonly used words are readily translated. More translations will be added over time."),l.a.createElement(l.a.Fragment,null,"Additions for React: ",l.a.createElement("ul",null,l.a.createElement("li",null,"New ",l.a.createElement(r.b,null,"<Localizable />")," component that acts as a wrapper for HTML or React elements."))),l.a.createElement(l.a.Fragment,null,"Additions for React Native: ",l.a.createElement("ul",null,l.a.createElement("li",null,"New ",l.a.createElement(r.b,null,"<Localizable />")," component that acts as a wrapper the ",l.a.createElement(r.b,null,"<Text />")," tag."),l.a.createElement("li",null,"Language detection for React Native has been splitted out from the core and moved into the additions folder.")))]},{title:"2.2.4",data:["Added docs about the Dictionary.",l.a.createElement(l.a.Fragment,null,"Changed ",l.a.createElement(r.b,null,"'react-native'")," from optional dependency to peer dependency.")]},{title:"2.2.3",data:["Fixed a bug with auto detect."]},{title:"2.2.2",data:["Fixed the issue where false warnings about insufficient parameters are shown. For sure!"]},{title:"2.2.1",data:["Emergency fix for a bug where auto detect in v2.2.0 fails for React Native apps."]},{title:"2.2.0",data:[l.a.createElement(l.a.Fragment,null,"In case the automatically detected language is not supported in the dictionary, langutil look for an alternative language from the dictionary. For example, if your dictionary contains localizations for ",l.a.createElement(r.b,null,"'en'"),", but the automatically detected language is ",l.a.createElement(r.b,null,"'en-us'"),", langutil will set the language to ",l.a.createElement(r.b,null,"'en'"),"."),"Fixed an issue where false warnings about insufficient parameters are shown.",l.a.createElement(l.a.Fragment,null,"New ",l.a.createElement(r.b,null,"logs.focus()")," function allows to you see langutil logs in a specific block of code while hiding the rest, that is, only necessary if the logs were already hidden prior to that block."),l.a.createElement(l.a.Fragment,null,"New ",l.a.createElement(r.b,null,"isAuto()")," function to know whether autoDetection is set to true.")]},{title:"2.1.3",data:[l.a.createElement(l.a.Fragment,null,"Silenced the unneccessary warning messages when ",l.a.createElement(r.b,null,"casing")," and ",l.a.createElement(r.b,null,"transform")," parameters in ",l.a.createElement(r.b,null,"localizeWith()")," are not defined as they are optional."),"Auto language detection is now supported in React Native.","Documentations have been updated to reduce package size.","Fixed the bug where langutil will always launch in minified mode by default."]},{title:"2.1.2",data:['Fixed an issue where you may encounter an error with a message like "this.localize is not a function".']},{title:"2.1.1",data:["Fixed some documentation errors.",l.a.createElement(l.a.Fragment,null,"Added new option ",l.a.createElement(r.b,null,"'sentenceCase'")," for the ",l.a.createElement(r.b,null,"casing")," parameter in ",l.a.createElement(r.b,null,"localizeWith()"),".")]},{title:"2.1.0",data:[l.a.createElement(l.a.Fragment,null,"Added new method ",l.a.createElement(r.b,null,"localizeWith()")," for more powerful localizing capabilities: Apply ",l.a.createElement("b",null,"casing styles")," and ",l.a.createElement("b",null,"custom transformations")," to the localized value! \ud83e\udd84"),l.a.createElement(l.a.Fragment,null,"Added new method ",l.a.createElement(r.b,null,"getDefinedLanguages()")," which allows you to access the list of languages defined in the dictionary during runtime."),"You can now assign anything to your localized value, for instance, you might want to have a different logo image for each language if you have a tagline in your logo.","Fixed a critical bug where there production build fails if logs are shown."]},{title:"2.0.0",data:["You can now define dictionaries by Keywords.",l.a.createElement(l.a.Fragment,null,"There is a new ",l.a.createElement(r.b,null,"createKey()")," method to help you with that."),"Language list now follows ISO language codes but the old convention that langutil 1.x.x still works.",l.a.createElement(l.a.Fragment,null,l.a.createElement(r.b,null,"index.d.ts")," integration.")]}]}}},162:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(2),r=t(19),o=t(4);a.default=function(){return{title:"v1",data:[{title:"1.1.4",data:[Object(i.localize)("CHANGELOG_MINOR_PERF_FIXES")]},{title:"1.1.3",data:[Object(i.localize)("CHANGELOG_FIXED_BUG_KEYWORD_REC_AS_INVALID")]},{title:"1.1.2",data:[Object(i.localize)("CHANGELOG_PERF_OPT_FOR_PROD_MODE")]},{title:"1.1.1",data:[Object(i.localize)("CHANGELOG_ADD_QUICKFIX_TO_DOC")]},{title:"1.1.0",data:[Object(i.localize)({keyword:"CHANGELOG_SHOWLOG_WILL_BE_REPLACED_BY",transform:Object(o.h)({showL:l.a.createElement(r.b,null,"showLogs()"),lHide:l.a.createElement(r.b,null,"logs.hide()"),lShow:l.a.createElement(r.b,null,"logs.show()")})}),Object(i.localize)({keyword:"CHANGELOG_ADDED_84_NEW_LANG",transform:Object(o.h)({langs:Object(n.createElement)((function(){var e=["akan","avestan","aymara","bihari","bislama","breton","burmese","bulgarian_old","chamorro","chechen","chuvash","cornish","cree","divehi","dzongka","ewe","faroese","fijian","fula","gaelic_scot","gaelic_manx","frisian_western","greenlandic","guarani","herero","hirimotu","ido","interlingua","interlingue","inuktitut","inupiak","kanuri","kashmiri","kikuyu","kinyarwanda","kirundi","komi","kongo","kwanyama","limburger","lingala","lugakatanga","luganda","manx","marshallese","moldavian","nauru","navajo","ndonga","ndebele_northern","norwegian_bokmal","norwegian_nynorsk","nuosu","occitan","ojibwe","oriya","oromo","ossetian","pali","quechua","romansh","sami","sango","sanskrit","serbian_croatian","setswana","siswati","southern_ndebele","swati","tagalog","tahitian","tatar","tibetan","tigrinya","tonga","tsonga","turkmen","twi","uyghur","venda","volapuk","wallon","wolof","zhuang"];return e.map((function(a,t){return l.a.createElement(n.Fragment,{key:t},l.a.createElement(r.b,{children:"'".concat(a,"'")}),t<e.length-1?", ":null)}))}))})})]},{title:"1.0.3",data:[Object(i.localize)({keyword:"CHANGELOG_FIXED_INCORRECT_ESCAPER_SWAP",transform:Object(o.h)({q:l.a.createElement(r.b,null,"'%q'"),p:l.a.createElement(r.b,null,"'%p'"),p2:l.a.createElement(r.b,null,"'%%p'")})}),Object(i.localize)("CHANGELOG_ADAPTED_SYNTAX_FOR_COMMONJS"),Object(i.localize)({keyword:"CHANGELOG_ADDED_AUTO_SUGGESTIONS",transform:Object(o.h)({init:l.a.createElement(r.b,null,"init()"),setL:l.a.createElement(r.b,null,"setLanguage()")})}),Object(i.localize)({keyword:"CHANGELOG_ADDED_CHINESE_CODE",transform:Object(o.h)({c:l.a.createElement(r.b,null,"'chinese'")})}),Object(i.localize)("CHANGELOG_EXAMPLES_REMOVED_FROM_DOC"),Object(i.localize)({keyword:"CHANGELOG_HIDELOGS_WILL_BE_DEPRECATED",transform:Object(o.h)({hL:l.a.createElement(r.b,null,"hideLogs()")})})]},{title:"1.0.2",data:[Object(i.localize)("CHANGELOG_ADD_UPDATE_HISTORY_TO_README"),Object(i.localize)("CHANGELOG_LANG_TABLE_MADE_COMPACT")]},{title:"1.0.1",data:[Object(i.localize)({keyword:"CHANGELOG_ADDED_HIDELOGS",transform:Object(o.h)({hide:l.a.createElement(r.b,null,"hideLogs()")})})]},{title:"1.0.0",data:[Object(i.localize)("CHANGELOG_CREATION_OF_LANGUTIL")]}]}}},163:function(e,a,t){},170:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(17),r=t(11),o=t(19),c=t(33),u=t(121),s=t(4),d=function(){return[t(160).default(),t(161).default(),t(162).default()]};t(163);a.default=Object(i.g)(Object(r.withLang)((function(e){var a=e.match.params.subId;Object(u.a)(a);for(var t=d(),n=[],i=0;i<t.length;i++){var r=t[i],m=r.title,g=r.data;n.push(l.a.createElement(c.a,{key:"h1-".concat(i),once:!0},l.a.createElement(o.d,{id:Object(s.b)(m),children:m})));for(var h=[],E=0;E<g.length;E++){var b=g[E],f=b.title,w=b.data;h.push(l.a.createElement(c.a,{key:"h2-".concat(E),once:!0},l.a.createElement(o.e,{id:Object(s.b)(f),className:"changelog-scn-h2",children:f})));for(var p=[],y=0;y<w.length;y++)p.push(l.a.createElement(c.a,{key:"li-".concat(y),once:!0},l.a.createElement(o.f,{className:"changelog-scn-li",children:w[y]})));h.push(l.a.createElement(c.a,{key:"ul-".concat(E),once:!0},l.a.createElement(o.n,{children:p}))),h.push(l.a.createElement("br",{key:"br-".concat(E)}))}n.push(h),n.push(l.a.createElement(o.g,{key:"sb-".concat(i)}))}return l.a.createElement("div",{className:"changelog-scn-container",children:n})})))}}]);
//# sourceMappingURL=5.180259f9.chunk.js.map