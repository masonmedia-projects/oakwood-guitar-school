import React from 'react'
import Layout from '../components/Layout';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql } from "gatsby";
import MyForm from '../components/ContactForm';

export default function contact({data}) {
  
    return (
        <Layout>
            <Row className="min-100 p-0 m-0">
              <Col lg={6} className="min-50 d-flex flex-column justify-content-center align-items-start bg-light p-5 mt-5 relative z-1">
                  <Img 
                  className="w-25 mt-5" 
                  durationFadeIn={0}
                  fluid={data.imageLogo.childImageSharp.fluid} />
                    <h1 className="section-title my-3">Get started today!</h1>
                    <h2 className="h4 text-muted font-weight-bold border-bottom pb-3 mb-3">Contact us to book a free trial lesson, for more information or with any questions you may have.</h2>
                    <MyForm />
                </Col>
                <Col lg={6} className="min-100 d-flex flex-column justify-content-end align-items-start p-0">
                  <Img 
                  className="img-full w-100 h-100" 
                  durationFadeIn={1500}
                  placeholderStyle={{ backgroundColor: `black` }}
                  style={{position: 'absolute', top: '0', zIndex: '0'}}
                  fluid={data.imageOne.childImageSharp.fluid} />
                </Col>
            </Row>
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    imageLogo: file(relativePath: { eq: "ogs_tele_icon_crop.png" }) {
      childImageSharp {
        fluid( 
          quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "ogs_strat.jpeg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1075, 
          quality: 100,
          grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
