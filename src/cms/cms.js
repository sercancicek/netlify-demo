import React from 'react'
import CMS from 'netlify-cms'
import IndexComponent from '../templates';

CMS.registerPreviewTemplate('home', ({ entry }) => {
  console.log({ bb: entry });
  return (
    <IndexComponent {...entry.toJS().data} />
  )
})