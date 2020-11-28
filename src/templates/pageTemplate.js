import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Row, Col } from "react-bootstrap";
import Img from "gatsby-image";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  // let post = data.markdownRemark
  return (
      <Layout>
          <Row className="min-100 p-0 m-0">
              <Col sm={12} className="align-left-bottom p-0">
                <div className="relative z-1 drop-shadow bg-texture p-5 m-3 rounded">
                {/* logo */}
                <Img 
                className="mb-4" 
                style={{width: '180px'}} 
                fluid={frontmatter.logo.childImageSharp.fluid} />
                  <h1 className="site-title">{frontmatter.title}</h1>
                  <h2 className="h4 font-weight-bold text-secondary">{frontmatter.subtitle}</h2>
                </div>
                {/* featuredImage */}
                <Img 
                className="img-full" 
                durationFadeIn={1500}
                placeholderStyle={{ backgroundColor: `black` }}
                style={{position: 'absolute', zIndex: '0'}}
                fluid={frontmatter.featuredImage.childImageSharp.fluid} />
              </Col>
          </Row>
          
          {/* text body */}
          <Row className="min-50 p-2 m-0 bg-texture">
              <Col sm={12} className="align-left-center p-5">
                {/* logo */}
                <Img 
                className="mb-4" 
                style={{width: '180px'}} 
                fluid={frontmatter.logo.childImageSharp.fluid} />
                <h6 className="text-muted font-weight-light text-uppercase mb-3">Oakwood Guitar School</h6>
                {/* body */}
                <div className=""
                dangerouslySetInnerHTML={{ __html: html }}
                />
              </Col>
          </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
        logo {
          childImageSharp {
              fluid(
                maxWidth: 1075, 
                quality: 100,
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
        featuredImage {
          childImageSharp {
              fluid(
                maxWidth: 1075, 
                quality: 100, 
                grayscale: true,
                ) {
                  ...GatsbyImageSharpFluid
              }
          }
        }
      }
    }
  }
`