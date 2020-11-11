import React from 'react'
import Layout from '../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Row, Col } from 'react-bootstrap';

export default function PageNotFound() {
    return (
        <Layout>
            <Row className="min-100">
                <Col sm={12} className="align-center bg-texture">
                    <h1 className="site-title">Page Not Found</h1>
                    <p>Please return to <AniLink cover to="/">OGS</AniLink></p>
                </Col>
            </Row>
        </Layout>
    )
}
