import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import { Row, Col, Button } from "react-bootstrap";
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Home({data}) {

  return (
    <div>
      <Layout>
        <Row className="min-100 p-0 m-0">
          <Img 
          className="img-full left" 
          durationFadeIn={1500}
          style={{position: 'absolute', zIndex: '0'}}
          fluid={data.imageOne.childImageSharp.fluid} alt="Oakwood Guitar School" />
          <Col md={{span: 6, offset: 6}} className="min-100  align-left-bottom p-5">
            <div className="w-100 bg-white shadow-lg rounded p-5">
            <Img 
            className="w-50 my-3" 
            fluid={data.imageIcon.childImageSharp.fluid} alt="Oakwood Guitar School logo" />
              <h1 className="site-title">
                Oakwood
                <span className="d-table">Guitar</span>
                <span className="d-table">School</span>
              </h1>
            </div>
          </Col>
        </Row>


        {/* what we do */}
        <Row className="min-100 p-0 m-0">
          <Col sm={12} className="p-0">
          <Img 
          className="w-100 h-100" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
          fluid={data.imageTwo.childImageSharp.fluid} alt="Oakwood Guitar School" />
          {/* embed row + col */}
            <Row>
              <Col lg={6} className="align-left-center bg-white rounded shadow-lg p-5 m-5">
                <h1 className="section-title mb-5">
                  What We Do.
                </h1>
                <h2 className="h4 text-muted font-weight-bold">At OGS we provide fun, engaging, goal-oriented music lessons for students of all ages.</h2>
                <p className="my-3">Oakwood Guitar School is a well equipped home studio that provides a comfortable, relaxed learning environment for beginner to advanced guitar students, both children and adults of any age. Based in Toronto we service the areas of Regal Heights, Humewood, Hillcrest Village, Wychwood, Cedarvale, Forest Hill and St. Clair West. We also offer lessons over Zoom, Facetime, Skype or in home.</p>
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
              Why OGS?
            </h1>
            <h2 className="h5 font-weight-bold">Some reasons why Oakwood Guitar School is a great place to learn</h2>
          </Col>
          <Col lg={3} md={6} className="align-left-top p-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#14CFA0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <h5 className="py-3">Experienced Teachers</h5>
            <p>Our teachers are university-educated, active professional musicians with years of experience playing and teaching music.</p>
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
            <h5 class="py-3">All Ages & Levels</h5>
            <p>We teach students of all ages, abilities, and experience levels. Whether beginner or advanced, we can help you achieve your goals.</p>
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
            <h5 class="py-3">Perform and Record</h5>
            <p>At the end of each semester we offer recordings and recitals as an opportunity for our students to show off their new skills to friends & family!</p>
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
            <h5 class="py-3">Certified Programs</h5>
            <p>We teach certified programs from the Registry of Guitar Tutors and Conservatory Canada upon request in addition to essential skills and repertoire.</p>
            <AniLink cover to="/why-ogs">
              <Button variant="outline-light" className="mt-4 shadow">Learn more</Button>
            </AniLink>
          </Col>
        </Row>

        {/* what you need */}
        <Row className="min-100 p-0 m-0">
          <Col sm={12} className="align-left-center">
          <Img 
          className="w-100 h-100" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
          fluid={data.imageFour.childImageSharp.fluid} alt="Oakwood Guitar School" />
          {/* embed row + col */}
            <Row>
              <Col lg={6} className="align-left-center bg-white shadow-lg rounded p-5 m-5">
                <h1 className="section-title pt-5 mb-5">
                  What You Need.
                </h1>
                <h2 className="h4 text-muted font-weight-bold">New to guitar?  Here are a few things you'll need for lessons at Oakwood Guitar School:</h2>
                <p className="my-3">An acoustic guitar is recommended for new students, however electric guitar will also work just fine if that is what you have or what you're more interested in.  If the student is under 11 years old a smaller scale guitar is recommended, probably a 3/4 or half size guitar.</p>
                <Button variant="dark">Learn more</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* what happens in a lesson */}
        <Row className="min-100 p-0 m-0">
          <Col sm={12} className="align-left-center p-0">
          <Img 
          className="w-100 h-100" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '0'}}
          fluid={data.imageFive.childImageSharp.fluid} alt="Oakwood Guitar School" />
          {/* embed row + col */}
            <Row className="p-0 m-0">
              <Col lg={6} className="align-left-center bg-ogs-green text-light drop-shadow rounded p-5 m-4 ml-auto">
                <h1 className="section-title pt-5 mb-5">
                  What happens in a lesson?
                </h1>
                <h2 className="h4 font-weight-bold">Here's how a typical lesson works at Oakwood Guitar School</h2>
                <p className="my-3">Lessons at OGS are personalized and tailored to the needs of each individual student. However they do follow a relatively consistent routine which includes: warm ups and stretches, technical exercises, ear training, rhythm practice, repertoire development, and other essential skills.</p>
                <Button variant="light">Find out more</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* location */}
        <Row className="min-100 p-0 m-0">
          <Col sm={12} className="align-left-center p-3">
          <Img 
          className="w-100 h-100 left" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
          fluid={data.imageSix.childImageSharp.fluid} alt="Oakwood Guitar School" />
          {/* embed row + col */}
            <Row className="m-3 shadow-lg rounded">
              <Col lg={6} className="align-left-center bg-white p-5">
                <h1 className="section-title pt-5 mb-5">
                  Location & Hours.
                </h1>
                <h2 className="h4 text-muted font-weight-bold">OGS is conveniently located in Toronto's west-end, with easy car and ttc access.</h2>
                  <ul className="list-unstyled my-3">
                    <li><span className="font-weight-bold">Phone • </span>416.732.0764</li>
                    <li><span className="font-weight-bold">Email • </span> <a href="mailto:info@oakwoodguitarschool.com">info@oakwoodguitarschool.com</a></li>
                    <li><span className="font-weight-bold">Address • </span>113 Alberta Avenue, Toronto, Ontario</li>
                  </ul>
                  <p>Oakwood Guitar School is located in downtown Toronto's Wychwood area, and operates Monday-Friday between 3pm-10pm. In cases, we offer scheduling flexibility if students require aternate lesson times or lesson makeup options. Please see our <AniLink cover to="/rates-policies" className="font-weight-bold">rates & policies</AniLink> page for more details, or inquire for more information.</p>
                  <a href="mailto:info@oakwoodguitarschool.com">
                    <Button className="my-3" variant="dark">Contact us</Button>
                  </a>
              </Col>
              <Col lg={6} className="p-0 m-0 min-50">
                <Img 
                className="w-100 h-100" 
                durationFadeIn={1500}
                style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
                fluid={data.imageMap.childImageSharp.fluid} alt="Oakwood Guitar School" />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* contact */}
        <Row className="min-100 p-0">
          <Col sm={12} className="align-center">
          <Img 
          className="w-100 h-100 bottom" 
          durationFadeIn={1500}
          style={{position: 'absolute', objectFit: 'cover', zIndex: '-1'}}
          fluid={data.imageSeven.childImageSharp.fluid} alt="Oakwood Guitar School" />
          {/* embed row + col */}
              <div className="align-center bg-light w-75 h-75 p-5 rounded-lg shadow">
                <h1 className="section-title mb-3">
                  Get started today!
                </h1>
                <h2 className="h4 text-muted font-weight-bold">Contact us for booking and more information.</h2>
                <Button variant="dark" className="my-3">Get in touch</Button>
              </div>
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
    imageIcon: file(relativePath: { eq: "ogs_tele_icon_crop.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageOne: file(relativePath: { eq: "ogs_guitars.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "ogs_2.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "ogs_guitars.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "ogs_blue.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "ogs_4.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "ogs_gretsch.jpeg" }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "ogs_6.png" }) {
      ...fluidImage
    }
    imageMap: file(relativePath: { eq: "ogs_map_2.png" }) {
      ...fluidImage
    }
    
  }
`
