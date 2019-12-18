/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

var path = require("path")
var _ = require("lodash")

var config = require("./src/config")
const PAGE_SIZE = 20

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blog.js`)
  const blogListTemplate = path.resolve(`src/templates/blogList.js`)

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            posts: allContentfulBlogPost {
              edges {
                node {
                  slug
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Break the entries into chunks according to
        let chunks = _.chunk(result.data.posts.edges, PAGE_SIZE)

        chunks.forEach((chunk, index) => {
          if (index == 0) {
            createPage({
              path: `blog`,
              component: blogListTemplate,
              context: {
                skip: PAGE_SIZE * index,
                limit: PAGE_SIZE,
                pageNumber: index + 1,
                hasNextPage: index != chunks.length - 1,
                nextPageLink: `/blog/page/${index + 2}`,
              },
            })
          }
          createPage({
            path: `blog/page/${index + 1}`,
            component: blogListTemplate,
            context: {
              skip: PAGE_SIZE * index,
              limit: PAGE_SIZE,
              pageNumber: index + 1,
              hasNextPage: index != chunks.length - 1,
              nextPageLink: `/blog/page/${index + 2}`,
            },
          })
        })

        // Create a blog page
        result.data.posts.edges.forEach(({ node }) => {
          // loop over split pages
          createPage({
            path: `${config.blogRootPath}/${node.slug}`,
            component: blogTemplate,
            context: {
              slug: node.slug,
            },
          })
        })
      })
    )
  })
}

/*
const path = require(`path`)
//const _ = require("lodash")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  const getBlog = makeRequest(
    graphql,
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
  // Create archive page for all blogs, including pagination
  const getArchive = makeRequest(
    graphql,
    `

  {
    allContentfulBlogPost (
      sort: { fields: [createdAt], order: DESC }
    )
    {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`
  ).then(result => {
    const blogs = result.data.allContentfulBlogPost.edges
    const blogsPerPage = 1
    const numPages = Math.ceil(blogs.length / blogsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/archive.js"),
        context: {
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  return Promise.all([getBlog, getArchive])
}
*/
