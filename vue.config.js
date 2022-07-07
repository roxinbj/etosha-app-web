const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [ '/features','/contactus'];

// Example webpack configuration -- input/output/etc. omitted for brevity.
//export default {
//  // Basic usage (output defaults to sitemap.xml)
//  plugins: [
//    new SitemapPlugin({ base: 'https://etosha-app.com', paths })
//  ]
//}

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new SitemapPlugin({ base: 'https://etosha-app.com', paths }),
      //  new SitemapPlugin('https://etosha-app.com', paths, {
      //          filename: 'sitemap.xml',
      //          lastmod: true,
      //          changefreq: 'hourly',
      //          priority: '0.8'
      //  }),

        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/'],
          {
            // options
          }
        ),
        
      ]
    }
  }
}