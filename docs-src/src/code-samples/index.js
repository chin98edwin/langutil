let defaultExtracted = false
let CodeSamples = {
  // Demo: require('./demo'),
  Casings: require('./casings'),
  DictionaryPrimaryExample: require('./dictionary-primary-example'),
  DictionarySecondaryExample: require('./dictionary-secondary-example'),
  DictionaryIndexExample: require('./dictionary-index-example'),
  FolderStructure: require('./folder-structure'),
  HomeDemo: require('./home-demo'),
  Initialize: require('./initialize'),
  Install: require('./install'),
  ParamArray: require('./paramarray'),
  ParamArrayDictionary: require('./paramarray-dictionary'),
  ParamObject: require('./paramobject'),
  ParamObjectDictionary: require('./paramobject-dictionary'),
  SwitchingLanguages: require('./switching-languages'),
  Transformations: require('./transformations'),
  Usage: require('./usage'),
}

if (!defaultExtracted) {
  const index = Object.keys(CodeSamples)
  for (let i = 0; i < index.length; i++) {
    CodeSamples[index[i]] = CodeSamples[index[i]].default
  }
}

module.exports = CodeSamples
