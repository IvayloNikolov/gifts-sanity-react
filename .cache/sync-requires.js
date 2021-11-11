
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/ivaylonikolov/Desktop/Gifts/gifts-sanity-react/src/pages/404.js")),
  "component---src-pages-astrology-js": preferDefault(require("/Users/ivaylonikolov/Desktop/Gifts/gifts-sanity-react/src/pages/astrology.js")),
  "component---src-pages-contacts-js": preferDefault(require("/Users/ivaylonikolov/Desktop/Gifts/gifts-sanity-react/src/pages/contacts.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ivaylonikolov/Desktop/Gifts/gifts-sanity-react/src/pages/index.js")),
  "component---src-pages-quiz-js": preferDefault(require("/Users/ivaylonikolov/Desktop/Gifts/gifts-sanity-react/src/pages/quiz.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/ivaylonikolov/Desktop/Gifts/gifts-sanity-react/src/pages/search.js")),
  "component---src-templates-blog-js": preferDefault(require("/Users/ivaylonikolov/Desktop/Gifts/gifts-sanity-react/src/templates/blog.js"))
}

