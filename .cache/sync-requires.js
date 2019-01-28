const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/oscaroceguera/Documents/Repos/Examples/gatsby-tutorial/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/oscaroceguera/Documents/Repos/Examples/gatsby-tutorial/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/oscaroceguera/Documents/Repos/Examples/gatsby-tutorial/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/oscaroceguera/Documents/Repos/Examples/gatsby-tutorial/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/oscaroceguera/Documents/Repos/Examples/gatsby-tutorial/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/oscaroceguera/Documents/Repos/Examples/gatsby-tutorial/src/pages/my-files.js")))
}

