import React from 'react'
import Menu from './Menu'
import { Container } from 'react-bootstrap'

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
