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
        title
        date
      }
      html
    }
  }
`

const BlogComponent = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.html }}></div>
    </Layout>
  )
}

export default BlogComponent