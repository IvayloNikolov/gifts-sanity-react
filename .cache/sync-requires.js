
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ivaylonikolov/Documents/gifts-react/gifts/.cache/dev-404-page.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/ivaylonikolov/Documents/gifts-react/gifts/src/pages/blog.js")),
  "component---src-pages-blog-post-js": preferDefault(require("/Users/ivaylonikolov/Documents/gifts-react/gifts/src/pages/blogPost.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ivaylonikolov/Documents/gifts-react/gifts/src/pages/index.js"))
}

