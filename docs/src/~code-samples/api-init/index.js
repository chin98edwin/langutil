import React from 'react'
import { localize } from 'langutil'
import CodeDisplay, { Line, Key, Var, Str, Func, Mark } from '~components/code-display'

const ApiInit = () => (
  <CodeDisplay
    title={localize('HOW_TO_USE_API', ['init()'])}
  >
    <Line>
      <Key>import</Key> <Var>langutil</Var>, {'{'} <Var>localize</Var>, <Mark><Var>AUTO_DETECT</Var></Mark> {'}'} <Key>from</Key> <Str>'langutil'</Str>
    </Line>
    <Line>
      <Key>import</Key> <Var>dictionary</Var> <Key>from</Key> <Str>'./localizations'</Str>
    </Line>
    <Line />
    <Line>
      <Var>langutil</Var>.<Func>init</Func>(<Var>dictionary</Var>, <Str>'{localize('DOCX_PRIMARY_LANG')}'</Str>, <Mark><Var>AUTO_DETECT</Var></Mark>)
    </Line>
  </CodeDisplay>
)

export default ApiInit
