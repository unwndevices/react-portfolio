import { Container, Row, Col } from 'react-bootstrap'
import { useState, useRef } from 'react'

export const Intro = () => {
    return (
        <Row className="align-items-end intro-container">
            <Col className="col-3 col-sm-12 ps-sm-5 fs-1">
                <h1>Hi</h1>
            </Col>
            <Col className="col-9 col-sm-12 pe-sm-5">
                <h3 className="intro-description">
                    I’m Ciro | product designer | embedded developer | 3d
                    artist.
                </h3>
            </Col>
        </Row>
    )
}
