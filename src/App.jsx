import './css/main.min.css'
import 'animate.css'
//import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavBar } from './components/NavBar'
import { Intro } from './components/Intro'
import { Timeline } from './components/Timeline'
import { Skillset } from './components/Skillset'
import { Projects } from './components/Projects'
import { ContactForm } from './components/ContactForm'

function App() {
    return (
        <Container className="app-gradient-bg">
            <NavBar />
            <Intro />
            <Row className=" justify-content-center m-5" id="about">
                <h2 className="section-title mb-5">about-me</h2>
                <Col className="col-sm-5">
                    <Timeline />
                </Col>
                <Col className="col-sm-5">
                    <Skillset />
                </Col>
            </Row>
            <Row className="justify-content-center m-5" id="projects">
                <h2 className="section-title mb-5">projects</h2>
                <Projects />
            </Row>
            <Row className="m-5" id="contacts">
                <h2 className="section-title mb-5">get-in-touch</h2>
                <ContactForm />
            </Row>
        </Container>
    )
}

export default App
