import React, { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import DocContentBoundary from '~boundaries/DocContentBoundary'
import DocContent from '~components/doc-content'
import DocSidebar from '~components/doc-sidebar'
import DocSidebarFab from '~components/doc-sidebar-fab'
import { VALUES } from '~constants'
import './index.css'

function DocDisplay({ sections, version, onChangeVersion }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const isCompactWidth = useMediaQuery('@media only screen and (max-width: 800px)')

  // TODO: Add tabs on top of sidebar to switch between doc versions in the future

  return (
    <>
      <div className='doc-display-container'>
        <DocSidebar
          sections={sections}
          // This forces sidebar to stay opened on non-compact screens
          width={isCompactWidth ? (showSidebar ? '100vw' : null) : '17.5em'}
          bottomInset={isCompactWidth ? (VALUES.fabSize) : 0}
          onNavChange={() => { setShowSidebar(false) }}
          version={version}
          onChangeVersion={onChangeVersion}
        />
        <DocContentBoundary>
          <DocContent />
        </DocContentBoundary>
      </div>
      {isCompactWidth &&
        <DocSidebarFab
          isSidebarVisible={showSidebar}
          onClick={() => { setShowSidebar(!showSidebar) }}
        />
      }
    </>
  )
}

export default DocDisplay
