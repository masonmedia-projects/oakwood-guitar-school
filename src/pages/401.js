import React from 'react'
import Layout from '../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Row, Col } from 'react-bootstrap';

export default function UnauthorizedError() {
    return (
        <Layout>
            <Row className="min-100">
                <Col sm={12} className="align-center bg-light">
                    <h1 className="site-title">Unauthorized Error</h1>
                    <p className="font-weight-bold">Please return to <AniLink cover to="/">OGS Home</AniLink></p>
                </Col>
            </Row>
        </Layout>
    )
}
