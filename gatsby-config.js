module.exports = {
  pathPrefix: '/mini-gatsbyv2-material-kit-react',
  siteMetadata: {
    title: 'Piccadilly Medical',
    titleTemplate: 'Piccadilly Medical - %s',
    description:
      'Dr. Abdelghani is a leading chronic pain specialist in Manchester helping patients with back pain, arthritis, migraine, neuropathic pain and after surgery.',
    url: 'https://piccadillymedical.com',
    siteUrl: 'https://piccadillymedical.com',
    image: '/assets/img/src/abdelghani-tie.jpg',
    twitterUsername: '@PainDocUK'

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
    },
     {
      resolve: 'gatsby-source-filesystem',
      options: {
         name: 'markdown-pages',
        path: './src/markdown-pages',
       
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/assets/img/',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Piccadilly Medical',
        short_name: 'Piccadilly Medical',
        start_url: '/',
        background_color: '#4EABFF',
        theme_color: '#4EABFF',
        display: 'standalone',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',

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
