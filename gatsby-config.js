module.exports = {
  pathPrefix: '/mini-gatsbyv2-material-kit-react',
  siteMetadata: {
    title: 'Picadilly Medical',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/assets/img/',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Piccadilly Medical',
        short_name: 'Piccadilly Medical',
        start_url: '/',
        background_color: '#4EABFF',
        theme_color: '#4EABFF',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
}
