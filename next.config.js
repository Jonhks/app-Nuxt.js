// // next.config.js
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   /* config options here */
// })

// // next.config.js
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   /* config options here */
// })


const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const fetch = require('isomorphic-unfetch')

module.exports = withCss(
  withSass({
    exportPathMap: async function(){
      const paths = {
        "/": {page: "/"},
        "/movies": {page: "/movies"},
        "/contact": {page: "/contact"},
      }
      const res = await fetch('https://api.myjson.com/bins/17m23o')
      const movies = await res.json()
      movies.forEach(movie => {
        paths[`/movie/${movie.id}`] = {
          page: "/movie/[id]",
          query: {id: movie.id}
        }
      });
      return paths
    },
    webpack(config, options){
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woof2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000
          }
        }
      })
      return config
    },
    assetsPrefix: "/test-web/"
  })
)