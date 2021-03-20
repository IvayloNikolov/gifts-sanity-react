
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-blog-js": preferDefault(require("/Users/ivaylonikolov/Documents/gifts-react/gifts/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ivaylonikolov/Documents/gifts-react/gifts/src/pages/index.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/ivaylonikolov/Documents/gifts-react/gifts/src/pages/search.js"))
}

