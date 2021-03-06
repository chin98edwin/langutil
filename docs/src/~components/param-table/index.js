import React from 'react'
import { Code, Table, TBody, Tr, Td } from '~components/document'
import OneOf from '~components/one-of'
import HeaderRow from './header-row'

function ParamTable({ data = {}, overrideVarName }) {
  let trArray = []
  const dataIndex = Object.keys(data)

  for (let i = 0; i < dataIndex.length; i++) {
    const { type, oneOf, desc, optional, defaultValue } = data[dataIndex[i]]
    const isOptional = optional === true || typeof defaultValue !== 'undefined'
    trArray.push(
      <Tr key={i}>
        <Td>
          <Code>{dataIndex[i] + (isOptional ? '?' : '')}</Code>
        </Td>
        {oneOf ?
          <Td>
            <OneOf values={oneOf} />
          </Td>
          :
          (Array.isArray(type) ?
            <Td children={type.join(', ')} />
            :
            <Td children={type} />
          )
        }
        <Td children={desc} />
        {/* <Td children={defaultValue} /> */}
      </Tr>
    )
  }

  return (
    <Table>
      <HeaderRow overrideVarName={overrideVarName} />
      <TBody children={trArray} />
    </Table>
  )
}

export default ParamTable
