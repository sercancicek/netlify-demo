import React from 'react'

import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark (
            filter: {
            fileAbsolutePath: {
                regex: "/posts/"
            }
            }
        ) {
            edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                title
                date
                }
            }
            }
        }
    }
    `)
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {
                    data.allMarkdownRemark.edges.map((edge, i) => {
                        return (
                            <li key={i}>
                                <Link
                                    to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default BlogPage