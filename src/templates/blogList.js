import React from "react"
import { Link, graphql, navigate } from "gatsby"
//import { window } from "browser-monads"
import Layout from "../components/layout"
//import Nav from "../components/nav"
import SEO from "../components/seo"
import "./blogList.css"
import { makeStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  bullet: {
    margin: "0 2px",
    transform: "scale(0.8)",
    minWidth: 50,
    backgroundColor: "salmon",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "black",
    fontSize: 30,
  },
  title: {
    margin: 50,
    fontSize: 25,
    justify: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  title2: {
    margin: 50,
    fontSize: 17,
    justify: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "black",
  },
  items: {
    fontSize: 17,
    color: "black",
  },
})

const BlogListPage = ({ data, pageContext }) => {
  const classes = useStyles()
  const blogPosts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <SEO title="Blog" keywords={["lists", "On_The_Links", "links"]} />

      <header>
        <div className={classes.title}>Links Page:</div>
        <p>
          This page provides an archive of the lists. There are twenty links per
          page.
        </p>
        <hr />
      </header>
      <Grid
        container
        spacing={0}
        directions="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={10}>
          <Grid className={classes.bullet}>
            {blogPosts.map(({ node: post }) => (
              <CardContent key={post.id}>
                <Link className="Link" to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
                <hr />
              </CardContent>
            ))}
          </Grid>
          {pageContext && pageContext.hasNextPage && (
            <Link className={classes.title2} to={pageContext.nextPageLink}>
              <small>Next page</small>
            </Link>
          )}
          <br />
          <Link className={classes.title2} to="/">
            Go back to the homepage
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default BlogListPage

export const pageQuery = graphql`
  query ArchivePageQuery($skip: Int, $limit: Int) {
    allContentfulBlogPost(skip: $skip, limit: $limit) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

//<Nav />
