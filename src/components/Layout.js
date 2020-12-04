import React, { useEffect } from 'react';
import Menu from './Menu';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import SEO from './SEO';

export default function Layout(props) {
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   });
    return (
        <>
            <SEO />
            <Menu />
            <Container fluid
            className={`${props.containerClass} p-0`}
            style={props.containerStyle}>
                {props.children}
            </Container>
            <Footer />
        </>
    )
}
