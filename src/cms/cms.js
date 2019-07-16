import React from 'react'
import CMS from 'netlify-cms'
import IndexComponent from '../templates';
import Layout from '../components/layout';

CMS.registerPreviewTemplate('home', ({ entry }) => {
  console.log({ bb: entry });
  return (
    <Layout>
      <IndexComponent {...entry.toJS()} />
    </Layout>
  )
})