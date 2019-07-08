module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp',
        author: 'Andrew Mead'
    },
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-plugin-netlify-cms`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark',
    ]
}