import React from 'react'
import Menu from './Menu'
import { Container } from 'react-bootstrap'
import { Fade } from "react-awesome-reveal";

export default function Layout(props) {
    return (
        <>
            <Menu />
            <Container fluid 
            className={`${props.containerClass} p-0`}
            style={props.containerStyle}>
                {props.children}
            </Container>
        </>
    )
}
