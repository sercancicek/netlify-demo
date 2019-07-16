import React from 'react'
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query (
    $slug: String!
    $type: String!
  ) {
    markdownRemark (
      fields:
      {
        slug: { eq: $slug }
        type: { eq: $type }
      }
    ) {
      frontmatter {
        h1
        h2
        p
      }
      html
    }
  }
`

const IndexComponent = ({ data }) => {

  let title = '';
  let subtitle = '';
  let paragraph = '';

  if (data.markdownRemark) {
    title = data.markdownRemark.frontmatter.h1
    subtitle = data.markdownRemark.frontmatter.h2
    paragraph = data.markdownRemark.frontmatter.p
  } else {
    title = data.h1
    subtitle = data.h2
    paragraph = data.p
  }

  return (
    <Layout>
      <h1>
        {title}
      </h1>
      <h2>
        {subtitle}
      </h2>
      <p>
        {paragraph}
      </p>
    </Layout>
  )
}

export default IndexComponent