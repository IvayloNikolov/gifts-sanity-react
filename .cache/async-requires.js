// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-search-js": () => import("./../../../src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */),
  "component---src-templates-blog-js": () => import("./../../../src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */)
}

