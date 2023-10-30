import { Container, Row, Col } from 'react-bootstrap'
import { useState, useRef } from 'react'

export const Intro = () => {
    return (
        <Row className="align-items-end intro-container">
            <Col className="col-sm-3 ps-sm-5">
                <h1>Hi</h1>
            </Col>
            <Col className="col-sm-9 pe-sm-5">
                <h3 className="intro-description">
                    I’m Ciro | product designer | embedded developer | 3d
                    artist.
                </h3>
            </Col>
        </Row>
    )
}
