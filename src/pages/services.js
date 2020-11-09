import React from 'react'
import Layout from '../components/Layout';
import { Row, Col } from 'react-bootstrap';

export default function services() {
    return (
        <Layout>
            <Row className="min-100">
                <Col xl={12} className="align-center">
                    <h1 className="site-title">Services</h1>
                </Col>
            </Row>
        </Layout>
    )
}
