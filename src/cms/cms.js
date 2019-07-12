import React from 'react'
import CMS from 'netlify-cms'
import IndexComponent from '../templates';

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <IndexComponent {...entry.toJS().data} />
))