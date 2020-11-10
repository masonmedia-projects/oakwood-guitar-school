import React, { Component } from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
// import Img from "gatsby-image"
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
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-skip-forward" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 5v14l12 -7z" />
                                <line x1="20" y1="5" x2="20" y2="19" />
                            </svg> */}
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
                                    <li>Lesson at OGS</li>
                                </AniLink>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <h3 className="font-weight-bold border-bottom border-secondary py-3 mb-3 w-100">Work.</h3>
                            <ul className="list-unstyled">
                                <AniLink href="/">
                                    <li>Warren Yen</li>
                                </AniLink>
                                <AniLink href="/">
                                    <li>Jaxx Liberty</li>
                                </AniLink>
                                <AniLink href="/">
                                    <li>Neil Whitford</li>
                                </AniLink>
                                <AniLink href="/">
                                    <li>Big Horn Sheep</li>
                                </AniLink>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <h3 className="font-weight-bold border-bottom border-secondary py-3 mb-3 w-100">More.</h3>
                            <ul className="list-unstyled">
                                <a href="https://github.com/masonmedia" target="_blank"><li>Github</li></a>
                                <a href="https://www.behance.net/andrewmasonmedia" target="_blank"><li>Behance</li></a>
                                <a href="http://copy.andrewmasonmedia.com/" target="_blank"><li>Writing/Editing</li></a>
                                <AniLink href="/">
                                    <li>Resume</li>
                                </AniLink>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <h3 className="font-weight-bold border-bottom border-secondary py-3 mb-3 w-100">Connect.</h3>
                            <ul className="list-unstyled blockquote">
                                <a href="https://www.AniLinkedin.com/in/andrewmasonmedia/" target="_blank"><li>AniLinkedin</li></a>
                                <a href="https://www.facebook.com/andrewmasonmedia/" target="blank"><li>Facebook</li></a>
                                <a href="https://twitter.com/C_AndrewMason" target="_blank"><li>Twitter</li></a>
                                <a href="mailto:andrewmasonmedia@gmail.com"><li>Email</li></a>
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
