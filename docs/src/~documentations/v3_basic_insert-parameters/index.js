import React from 'react'
import { localize } from 'langutil'
import { withLang } from 'langutil/react-additions'
import { H1, H2, Body, Code } from '~components/document'
import { withProps } from '~modules'
import CodeSamples from '~code-samples'

export default withLang(() => (
  <>

    <H1 id='insert-parameters' children={localize('INSERT_PARAMETERS')} />

    <Body children={localize('DOC_BODY_INSERT_PARAM_INTRO')} />
    <br />
    <Body children={localize('DOC_BODY_LANGUTIL_PROVIDE_TWO_MTD_OVERCOME_ISSUE')} />
    <br />

    <H2 id='by-array' children={localize('BY_ARRAY')} />
    <Body children={localize({
      keyword: 'DOC_BODY_BY_PASSING_IN_ARRAY_AS_PARAM',
      transform: withProps({ p: <Code>'%p'</Code> })
    })} />
    <CodeSamples.ParamArrayDictionary />
    <CodeSamples.ParamArray />
    <Body children={localize({
      keyword: 'DOC_BODY_TO_DISPLAY_P_IN_LOC',
      transform: withProps({ p: <Code>'%p'</Code>, escapedP: <Code>'%%p'</Code> })
    })} />

    <br /> <br />

    <H2 id='by-object' children={localize('BY_OBJECT')} />
    <Body children={localize({
      keyword: 'DOC_BODY_BY_PASSING_IN_ARRAY_AS_OBJECT',
      transform: withProps({ k: <Code>{`'{:key}'`}</Code> })
    })} />
    <CodeSamples.ParamObjectDictionary />
    <CodeSamples.ParamObject />
    <Body children={localize({
      keyword: 'DOC_BODY_TO_DISPLAY_KEY_IN_LOC',
      transform: withProps({ k1: <Code>{`'{:key}'`}</Code>, k2: <Code>{`'{::key}'`}</Code> })
    })} />

  </>
))
