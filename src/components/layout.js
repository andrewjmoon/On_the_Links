/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Menu from "./Menu"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Menu siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: 50,
          maxWidth: 2000,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <main>{children}</main>
        <br />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a className="Link" href="https://www.gatsbyjs.org">
            Gatsby, Contentful, and Material-ui
          </a>
          <hr/>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
/*
style={{
  margin: `0 auto`,
  maxWidth: 2000,
  padding: `0px 1.0875rem 1.45rem`,
  paddingTop: 0,
}}
*/
