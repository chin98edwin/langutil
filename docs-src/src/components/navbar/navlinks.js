import React from 'react'
import { localize } from 'langutil'
import { PATHS, STRINGS } from '../../constants'

export default function getNavLinks() {
  return [
    {
      to: PATHS.docs,
      children: (
        <div>
          {localize('DOCS')}<span className='navbar-version-num' children={`v${STRINGS.currentVersion}`} />
        </div>
      )
    },
    // {
    //   to: PATHS.changelog,
    //   children: localize('CHANGELOG')
    // },
    // {
    //   to: PATHS.builder,
    //   children: localize('BUILDER')
    // },
  ]
}
