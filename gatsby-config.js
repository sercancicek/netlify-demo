module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp',
        author: 'Andrew Mead'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
              modulePath: `${__dirname}/src/cms/cms.js`,
              enableIdentityWidget: true
            }
          },
    ]
}