import React from 'react'
import CMS from 'netlify-cms'
import IndexComponent from '../templates';
import './cms-utils'

CMS.registerPreviewTemplate('home', ({ entry }) => {
  console.log({ bb: entry });
  return (
    <IndexComponent {...entry.toJS()} />
  )
})