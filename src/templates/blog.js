import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  bullet: {
    margin: "0 2px",

    transform: "scale(0.8)",
    minWidth: 800,
    backgroundColor: "salmon",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    margin: 50,
    fontSize: 20,
    justify: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "black",
  },
  items: {
    fontSize: 25,
    color: "black",
  },
})

const BlogPage = ({ data }) => {
  const classes = useStyles()
  //const { title, body, image } = props.data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={data.contentfulBlogPost.title} />
      <div>
        <Grid
          container
          spacing={0}
          directions="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={10}>
            <h1>{data.contentfulBlogPost.title}</h1>
            <ReactMarkdown source={data.contentfulBlogPost.body.body} />

            <Link className="Link" to="/blog">
              View more posts
            </Link>
            <br />
            <br />
            <Link className="Link" to="/">
              Back to Home
            </Link>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPostsPageQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
`
//<h1>{title}</h1>
/*
<div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        */
