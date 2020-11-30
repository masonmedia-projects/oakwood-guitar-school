import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Row, Col, Button } from "react-bootstrap";
import * as Constants from '../copy/homeText';
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import MyForm from "../components/ContactForm";
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Home({data}) {
  const text = Constants.text;

  return (
    <div>
      <Layout>
        {/* banner */}
        <Row className="min-100 p-0 m-0">
          <Img 
          className="img-full left" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', zIndex: '0'}}
          fluid={data.imageOne.childImageSharp.fluid} alt="Oakwood Guitar School" />
          <Col md={{span: 7, offset: 5}} className="min-100  align-left-bottom relative z-1 p-4">
            <div className="w-100 bg-black text-light shadow-lg rounded p-5"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out-back">
            <Img 
            className="my-3" 
            style={{width: '200px'}}
            fluid={data.imageIcon.childImageSharp.fluid} alt="Oakwood Guitar School logo"
            />
              <h1 
              className="site-title">
                <span>Oakwood</span>
                <span className="d-table">Guitar</span>
                <span className="d-table">School</span>
              </h1>
              <div className="d-inline-block mt-4">
                <Button variant="light" className="mb-2 mr-2 shadow" onClick={() => scrollTo('#what-we-do')}>Learn more</Button>
                <AniLink cover to="/contact">
                  <Button variant="outline-light" className="shadow mb-2">Book a trial</Button>
                </AniLink>
              </div>
            </div>
          </Col>
        </Row>

        {/* what we do */}
        <Row id="what-we-do" className="min-100 p-0 m-0 relative z-1">
          <Col sm={12} className="align-left-center">
          <Img 
          className="w-100 h-100 left" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
          fluid={data.imageTwo.childImageSharp.fluid} alt="Oakwood Guitar School" />
          {/* embed row + col */}
            <Row>
              <Col lg={6} className="align-left-center bg-white rounded shadow-lg p-5 m-4">
                <h1 className="section-title mb-5">
                  {text.section_1.title}
                </h1>
                <h2 className="h4 text-muted font-weight-bold">{text.section_1.subtitle}
                </h2>
                <p className="my-3">
                {text.section_1.desc}
                </p>
                <AniLink cover to="/why-ogs">
                  <Button variant="dark" className="mt-4 shadow">Learn more</Button>
                </AniLink>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* why oGS? */}
        <Row className="min-100 p-0 m-0 text-light bg-black relative">
          <Col sm={12} className="align-left-top p-5">
            <h1 className="section-title pt-5 pb-3">
              {text.section_2.title}
            </h1>
            <h2 className="h5 font-weight-bold">
              {text.section_2.subtitle}
            </h2>
          </Col>
          <Col lg={3} md={6} className="align-left-top p-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#14CFA0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <h5 className="py-3 border-bottom border-secondary mb-3 w-100">
              {text.section_2.col1.title}
            </h5>
            <p>{text.section_2.col1.desc}</p>
            <AniLink cover to="/why-ogs">
              <Button variant="outline-light" className="mt-4 shadow">Learn more</Button>
            </AniLink>
          </Col>
          
          <Col lg={3} md={6} className="align-left-top p-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-check" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#14CfA0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
              <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
              <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
              <line x1="11" y1="6" x2="20" y2="6" />
              <line x1="11" y1="12" x2="20" y2="12" />
              <line x1="11" y1="18" x2="20" y2="18" />
            </svg>
            <h5 className="py-3 border-bottom border-secondary mb-3 w-100">{text.section_2.col2.title}</h5>
            <p>{text.section_2.col2.desc}</p>
            <AniLink cover to="/why-ogs">
              <Button variant="outline-light" className="mt-4 shadow">Learn more</Button>
            </AniLink>
          </Col>

          <Col lg={3} md={6} className="align-left-top p-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-skip-forward" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#14CFA0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 5v14l12 -7z" />
              <line x1="20" y1="5" x2="20" y2="19" />
            </svg>
            <h5 className="py-3 border-bottom border-secondary mb-3 w-100">{text.section_2.col3.title}</h5>
            <p>{text.section_2.col3.desc}</p>
            <AniLink cover to="/why-ogs">
              <Button variant="outline-light" className="mt-4 shadow">Learn more</Button>
            </AniLink>
          </Col>

          <Col lg={3} md={6} className="align-left-top p-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-certificate" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#14CFA0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="15" cy="15" r="3" />
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                <line x1="6" y1="9" x2="18" y2="9" />
                <line x1="6" y1="12" x2="9" y2="12" />
                <line x1="6" y1="15" x2="8" y2="15" />
              </svg>
            <h5 className="py-3 border-bottom border-secondary mb-3 w-100">{text.section_2.col4.title}</h5>
            <p>{text.section_2.col4.desc}</p>
            <AniLink cover to="/why-ogs">
              <Button variant="outline-light" className="mt-4 shadow">Learn more</Button>
            </AniLink>
          </Col>
        </Row>

        {/* what you need */}
        <Row className="min-100 p-0 m-0">
          <Col sm={12} className="align-left-center">
          <Img 
          className="w-100 h-100 left" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
          fluid={data.imageFour.childImageSharp.fluid} alt="Oakwood Guitar School" />
          {/* embed row + col */}
            <Row>
              <Col lg={6} className="align-left-center bg-white shadow-lg rounded p-5 m-4">
                <h1 className="section-title mb-5">
                  {text.section_3.title}
                </h1>
                <h2 className="h4 text-muted font-weight-bold">{text.section_3.subtitle}</h2>
                <p className="my-3">{text.section_3.desc}</p>
                <AniLink cover to="/what-you-need">
                  <Button variant="dark" className="my-3">Learn more</Button>
                </AniLink>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* what happens in a lesson */}
        <Row className="min-100 p-0 m-0 relative z-1">
          <Img 
          className="w-100 h-100" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '0'}}
          fluid={data.imageFive.childImageSharp.fluid} alt="Oakwood Guitar School" />
          <Col lg={{span: 8, offset: 4}} className="align-left-center p-4 min-50">
            <div className="bg-ogs-green text-light shadow-lg rounded p-5">
              <h1 className="section-title mb-5">
                {text.section_4.title}
              </h1>
              <h2 className="h4 font-weight-bold">{text.section_4.subtitle}</h2>
              <p className="my-3">{text.section_4.desc}</p>
              <AniLink cover to="/typical-lesson">
                <Button variant="light" className="my-3">Learn more</Button>
              </AniLink>
            </div>
          </Col>
        </Row>

        {/* location */}
        <Row className="min-100 p-4 m-0 relative z-1">
          <Img 
          className="w-100 h-100 left top" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
          fluid={data.imageSix.childImageSharp.fluid} alt="Oakwood Guitar School" />
            <Col lg={6} className="align-left-center bg-white p-5 border">
              <h1 className="section-title mb-5">
                Location & Hours.
              </h1>
              <h2 className="h4 text-muted font-weight-bold">OGS is conveniently located in Toronto's west-end, with easy car and ttc access.</h2>
                <ul className="list-unstyled my-3">
                  <li><span className="font-weight-bold">Phone • </span>416.732.0764</li>
                  <li><span className="font-weight-bold">Email • </span> <a href="mailto:info@oakwoodguitarschool.com">info@oakwoodguitarschool.com</a></li>
                  <li><span className="font-weight-bold">Address • </span>
                  <a href="https://www.google.com/maps/place/113+Alberta+Ave,+Toronto,+ON+M6H+2S1/@43.6785295,-79.435167,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34796c431333:0x7e33b5abdcc0a799!8m2!3d43.6785295!4d-79.4329783">113 Alberta Avenue, Toronto, Ontario</a></li>
                </ul>
                <p>Oakwood Guitar School is located in downtown Toronto's Wychwood area, and operates Monday-Friday between 3pm-10pm. In cases, we offer scheduling flexibility if students require aternate lesson times or lesson makeup options. Please see our <AniLink cover to="/rates-policies" className="font-weight-bold">rates & policies</AniLink> page for more details, or inquire for more information.</p>
                <div className="d-inline-block mt-4">
                  <AniLink cover to="/contact">
                    <Button variant="dark" className="mb-2 mr-2 shadow">Contact us</Button>
                  </AniLink>
                    <Button variant="ogs" className="shadow mb-2" onClick={() => scrollTo('#book-a-trial')}>Book a trial</Button>
                </div>
            </Col>
            <Col lg={6} className="p-0 m-0 min-50">
              <Img 
              className="w-100 h-100" 
              durationFadeIn={1500}
              style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
              fluid={data.imageMap.childImageSharp.fluid} alt="Oakwood Guitar School" />
            </Col>
        </Row>

        {/* contact */}
        <Row id="book-a-trial" className="min-100 bg-black p-4 m-0 relative z-1">
          <Col lg={6} className="p-0 m-0 min-50">
            <Img 
            className="w-100 h-100" 
            durationFadeIn={1500}
            style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
            fluid={data.imageEight.childImageSharp.fluid} alt="Oakwood Guitar School" />
          </Col>
          <Col lg={6} className="align-left-center bg-texture p-5">
            <h1 className="section-title mb-5">
                Book a free trial!
            </h1>
            <h2 className="h4 text-muted font-weight-bold">Contact Oakwood Guitar School to book a free 30 minute trial lesson!</h2>
            <p className="small text-muted pt-2">*Your personal information is only used for intial contact and subsequent communication with Oakwood Guitar School. It is not saved, stored, sold, or used in any other way.</p>
            <MyForm />
          </Col>
        </Row>
      </Layout>
    </div>
  )
}

// from https://www.sitepoint.com/automatically-optimize-responsive-images-in-gatsby/
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageIcon: file(relativePath: { eq: "ogs_tele_white_crop.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageOne: file(relativePath: { eq: "ogs_guitars.png" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageTwo: file(relativePath: { eq: "ogs_tele_picks.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "ogs_guitar_neck.png" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageFour: file(relativePath: { eq: "ogs_2_guitars.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "ogs_4.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "ogs_gretsch.jpeg" }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "ogs_7.png" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "ogs_instruments.jpg" }) {
      ...fluidImage
    }
    imageMap: file(relativePath: { eq: "ogs_map_2.png" }) {
      ...fluidImage
    }
    
  }
`
