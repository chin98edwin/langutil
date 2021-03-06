import React from 'react'
import { localize } from 'langutil'
import { withLang } from 'langutil/react-additions'
import { Body } from '~components/document'
import CodeSamples from '~code-samples'
import CodeTitle from '~components/code-title'
import ParamList from '~fragments/param-list'
import ReturnType from '~components/return-type'
import { CASING_PRESETS } from '~documentations/v3_api_casings'

export default withLang(() => {

  const params = {
    keyword: {
      type: 'string',
      desc: localize('API_PARAM_KEYWORD')
    },
    param: {
      type: ['Array', 'object'],
      desc: localize('API_PARAM_PARAM'),
      optional: true
    },
    casing: {
      oneOf: CASING_PRESETS,
      desc: localize('API_PARAM_CASING'),
      optional: true
    },
    transform: {
      type: 'Function',
      desc: localize('API_PARAM_TRANSFORM'),
      optional: true
    }
  }

  return (
    <>
      <CodeTitle name='localize' params={params} />
      <Body children={localize('API_DESC_LOCALIZE')} />
      <ParamList data={params} />
      <ReturnType
        desc={localize('API_RTYPE_THE_LOCALIZED_VALUE')}
        type='any'
      />
      <CodeSamples.ApiLocalize />
    </>
  )

})
