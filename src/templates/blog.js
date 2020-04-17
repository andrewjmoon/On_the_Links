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
    minWidth: 800,
    backgroundColor: "salmon",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 14,
  },
  title: {
    margin: 40,
    fontSize: 30,
    justify: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "black",
  },
  items: {
    fontSize: 12,
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
        <h2 className={classes.title}>{data.contentfulBlogPost.title}</h2>
        <Grid container spacing={0} className={classes.bullet}>
          <Grid item xs zeroMinWidth>
            <ReactMarkdown source={data.contentfulBlogPost.body.body} />
          </Grid>
        </Grid>
        <Link className="Link" to="/blog">
          <p>View more posts</p>
        </Link>
        <br />
        <Link className="Link" to="/">
          <p>Back to Home</p>
        </Link>
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
