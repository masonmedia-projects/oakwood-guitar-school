import React from 'react'
import Layout from '../components/Layout';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql } from "gatsby";
import MyForm from '../components/ContactForm';
import * as Constants from '../copy/text';

export default function contact({data}) {
    const text = Constants.text;
    return (
        <Layout>
            <Row className="min-100 p-0 m-0">
              <Col lg={6} className="min-50 d-flex flex-column justify-content-center align-items-start bg-light p-5 mt-5 relative z-1">
                  <Img 
                  className="mt-5" 
                  style={{width: '150px'}}
                  durationFadeIn={0}
                  fluid={data.imageLogo.childImageSharp.fluid} />
                    <h1 className="section-title my-3">{text.contact_page.title}</h1>
                    <p className="h5 text-muted font-weight-bold mb-0">{text.contact_page.subtitle}</p>
                    <p className="small text-muted pt-2">{text.privacy.caveat}</p>
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
