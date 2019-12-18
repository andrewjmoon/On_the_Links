import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Resource" />
    <h1>Resource Page:</h1>
    <p>
      Welcome to the resource page. Please see additional links provided below.
    </p>
    <br />
    <h3 className="Link">
      Best hospitals from 2019:
      <a
        style={{ color: "black" }}
        href="https://www.usnews.com/info/blogs/press-room/articles/2019-07-30/us-news-releases-30th-annual-2019-20-best-hospitals-rankings/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <br />
        https://www.usnews.com/info/blogs/press-room/articles/2019-07-30/us-news-releases-30th-annual-2019-20-best-hospitals-rankings
      </a>
    </h3>
    <br />
    <h3 className="Link">
      The Top fifty world's best site:
      <a
        style={{ color: "black" }}
        href="https://www.theworlds50best.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <br />
        https://www.theworlds50best.com/
      </a>
    </h3>
    <br />
    <h3 className="Link">
      The Top Ten List Website:
      <a
        style={{ color: "black" }}
        href="https://www.thetoptens.com/lists//"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <br />
        https://www.thetoptens.com/lists/
      </a>
    </h3>
    <br />
    <h3 className="Link">
      Listverse Website:
      <a
        style={{ color: "black" }}
        href="https://listverse.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <br />
        https://listverse.com/
      </a>
    </h3>
    <br />
    <Link className="Link" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
