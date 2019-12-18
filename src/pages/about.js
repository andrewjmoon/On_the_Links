import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Page</h1>
    <p>Provide interesting and insightful links everyday.</p>
    <p>
      This blog will focus on a variety of topics including books, photos,
      sports, and history. Also for best use, open the url links in a new tab by
      clicking the right button on the mouse and selecting open in a new tab.
    </p>
    <Link className="Link" to="/">
      Back to Home
    </Link>
  </Layout>
)

export default About
