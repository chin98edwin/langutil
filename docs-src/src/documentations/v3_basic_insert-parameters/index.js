import React from 'react'
import { localize } from 'langutil'
import { withLang } from 'langutil/react-additions'
import { H1, H2, Body, Code } from '../../components/document'
import { asProps } from '../../modules'
import CodeSamples from '../../code-samples'

export default withLang(() => (
  <>

    <H1 children={localize('INSERT_PARAMETERS')} />

    <Body children={localize('DOC_BODY_INSERT_PARAM_INTRO')} />
    <br />
    <Body children={localize('DOC_BODY_LANGUTIL_PROVIDE_TWO_MTD_OVERCOME_ISSUE')} />
    <br />

    <H2 children={'By Array'} />
    <Body children={localize({
      keyword: 'DOC_BODY_BY_PASSING_IN_ARRAY_AS_PARAM',
      transform: asProps({ p: <Code>'%p'</Code> })
    })} />
    <CodeSamples.ParamArrayDictionary />
    <CodeSamples.ParamArray />
    <Body>
      <i>{localize({
        keyword: 'DOC_BODY_TO_DISPLAY_P_IN_LOC',
        transform: asProps({ p: <Code>'%p'</Code>, escapedP: <Code>'%%p'</Code> })
      })}</i>
    </Body>

    <br /> <br />

    <H2 children={'By Object'} />
    <Body children={localize({
      keyword: 'DOC_BODY_BY_PASSING_IN_ARRAY_AS_OBJECT',
      transform: asProps({ k: <Code>{`'{:key}'`}</Code> })
    })} />
    <CodeSamples.ParamObjectDictionary />
    <CodeSamples.ParamObject />
    <Body children={localize({
      keyword: 'DOC_BODY_TO_DISPLAY_KEY_IN_LOC',
      transform: asProps({ k1: <Code>{`'{:key}'`}</Code>, k2: <Code>{`'{::key}'`}</Code> })
    })} />

  </>
))
