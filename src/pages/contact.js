import React from 'react'
import Layout from '../components/Layout';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import MyForm from '../components/ContactForm';

export default function contact({data}) {
  
    return (
        <Layout>
            <Row className="min-100 p-0 m-0">
              <Col lg={6} className="min-50 d-flex flex-column justify-content-center align-items-start bg-light p-5 mt-5 relative z-1">
                  <Img 
                  className="mt-5" 
                  style={{width: '150px'}}
                  durationFadeIn={0}
                  fluid={data.imageLogo.childImageSharp.fluid} />
                    <h1 className="section-title my-3">Get started today!</h1>
                    {/* <h2 className="h4 text-muted font-weight-bold">Contact us to book a free trial lesson, for more information or with any questions you may have.</h2> */}
                    <ul className="list-unstyled mb-4">
                      <li><span className="font-weight-bold">Phone • </span>416.732.0764</li>
                      <li><span className="font-weight-bold">Email • </span> <a href="mailto:info@oakwoodguitarschool.com">info@oakwoodguitarschool.com</a></li>
                      <li><span className="font-weight-bold">Address • </span>
                      <a href="https://www.google.com/maps/place/113+Alberta+Ave,+Toronto,+ON+M6H+2S1/@43.6785295,-79.435167,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34796c431333:0x7e33b5abdcc0a799!8m2!3d43.6785295!4d-79.4329783">113 Alberta Avenue, Toronto, Ontario</a></li>
                    </ul>
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
