const siteTitle = `Woods At Web | Gen Senoo`;
const siteUrl = `https://woodsatweb.com`;
const siteDescription = `Woods At Web公式サイト 代表：妹尾 弦`;
const backgroundColor = `#FFFFFF`;
const themeColor = `#062983`;

const siteMetadata = {
  siteTitle,
  siteTitleAlt: `Woods At Web公式サイト 代表：妹尾 弦`,
  siteHeadline: `Woods At Web公式サイト 代表：妹尾 弦`,
  siteUrl,
  siteDescription,
  siteLanguage: `jp`,
  author: `@gengineer18`, // twitter account id
  basePath: `/`,
  social: {
    twitter: `https://twitter.com/gengineer18`,
    github: `https://github.com/gengineer18`,
    facebook: `https://www.facebook.com/gen.senoo`,
  },
};

export default {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: ``,
      },
    },
    // gatsby-plugin-manifest should be described before gatsby-plugin-offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        Scope: `/`,
        start_url: `/?utm_source=homescreen`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `standalone`,
        icon: `./assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
