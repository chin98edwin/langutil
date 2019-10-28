import React from 'react'
import { localize } from 'langutil'
import { withLang } from 'langutil/react-additions'
import CodeDisplay, { Line, Com, Key, Var, Str, Func, Type } from '../../components/code-display'

const SwitchingLanguages = () => (
  <CodeDisplay>
    <Line>
      <Key>import</Key> {'{'} <Var>setLanguage</Var> {'}'} <Key>from</Key> <Str>'langutil'</Str>
    </Line>
    <Line />
    <Line>
      <Type>console</Type>.<Func>log</Func>(<Func>localize</Func>(<Str>'HELLO_WORLD'</Str>))
      <Com>{` // ${localize('HELLO_WORLD')}`}</Com>
    </Line>
    <Line>
      <Func>setLanguage</Func>(<Str>'{localize('DOC_EXAMPLE_SECONDARY_LANG')}'</Str>)
    </Line>
    <Line>
      <Type>console</Type>.<Func>log</Func>(<Func>localize</Func>(<Str>'HELLO_WORLD'</Str>))
      <Com>{` // ${localize('HELLO_WORLD_SECONDARY')}`}</Com>
    </Line>
  </CodeDisplay>
)

export default withLang(SwitchingLanguages)
