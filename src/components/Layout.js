import React, { useEffect } from 'react';
import Menu from './Menu';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Fade from 'react-reveal/Fade'

export default function Layout(props) {
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   });
    return (
        <>
            <Menu />
            <Fade cascade duration={1500}>
                <Container fluid
                className={`${props.containerClass} p-0`}
                style={props.containerStyle}>
                    {props.children}
                </Container>
                <Footer />
            </Fade>
        </>
    )
}
