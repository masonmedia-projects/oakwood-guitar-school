import React, { useEffect } from 'react';
import Menu from './Menu';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import AOS from 'aos';

export default function Layout(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return (
        <>
            <Menu />
            <Container fluid
            // data-aos="fade"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out-back"
            className={`${props.containerClass} p-0`}
            style={props.containerStyle}>
                {props.children}
            </Container>
            <Footer />
        </>
    )
}
