import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout style={{ textAlign: "center" }}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to On_The_Links:</h1>
    
    <Link className="Link" to="/blog/page/1/">
      View all posts
    </Link>
    <br />
    <Link className="Link" to="/resource">
      Resource Page
    </Link>
    <br />
    <Link className="Link" to="/about">
      About Page
    </Link>
    <Image />
  </Layout>
)

export default IndexPage
/*
<div
      style={{
        justify: "center",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        maxWidth: `200px`,
        marginBottom: `1.45rem`,
      }}
    >
      <Image />
    </div>
    */
