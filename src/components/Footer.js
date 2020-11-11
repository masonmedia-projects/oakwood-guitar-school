import React, { Component } from "react"
// import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    render() {         
        return (
            <footer>
                <Container fluid className="p-0 relative">
                    <Row className="bg-black text-light p-0">
                        <Col xl={4} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <h3 className="font-weight-bold border-bottom border-secondary py-3 mb-3 w-100">Menu.</h3>
                            <ul className="list-unstyled">
                                <AniLink href="/">
                                    <li>Home</li>
                                </AniLink>
                                <AniLink href="/why-ogs">
                                    <li>Why OGS?</li>
                                </AniLink>
                                <AniLink href="what-you-need">
                                    <li>What You Need</li>
                                </AniLink>
                                <AniLink href="/typical-lesson">
                                    <li>Lessons at OGS</li>
                                </AniLink>
                            </ul>
                        </Col>
                        
                        <Col xl={4} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <h3 className="font-weight-bold border-bottom border-secondary py-3 mb-3 w-100">Connect.</h3>
                            <ul className="list-unstyled">
                                <a href="mailto:info@oakwoodguitarschool.com" target="_blank"><li>Contact OGS</li></a>
                                <a href="https://www.neilwhitford.com" target="_blank"><li>Neil Whitford</li></a>
                                <a href="https://www.facebook.com/neil.whitford.58" target="_blank"><li>Facebook</li></a>
                                <a href="https://www.instagram.com/whitfordguitar/" target="_blank"><li>Instagram</li></a>
                                {/* <a href="https://twitter.com/whitfordguitar" target="_blank"><li>Twitter</li></a> */}
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <h3 className="font-weight-bold border-bottom border-secondary py-3 mb-3 w-100">More.</h3>
                            <ul className="list-unstyled blockquote">
                                <a href="https://soundcloud.com/oakwoodguitarschool" target="_blank"><li>Soundcloud</li></a>
                                <a href="https://www.linkedin.com/in/neil-whitford-627ab9a9/?originalSubdomain=ca" target="blank"><li>Linkedin</li></a>
                                <a href="https://soundbetter.com/profiles/8883-neil-whitford" target="_blank"><li>SoundBetter</li></a>
                                <a href="https://hearthis.at/neil-whitford/"><li>heartthis</li></a>
                            </ul>
                        </Col>
                        <Col sm={12} className="align-center font-weight-bold pt-4 pb-5">
                        <p id="copyright" className="mb-0">
                        &copy; Oakwood Guitar School | {this.state.date.getFullYear()}
                        </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;
