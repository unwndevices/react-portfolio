import { Navbar, Nav } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'

export const NavBar = () => {
    return (
        <Navbar className="m-lg-4 nav-bar fs-2" fixed="top">
            <Nav className="me-auto">
                <Link
                    href="#about"
                    className="px-4"
                    activeClass="active-nav"
                    smooth
                    spy
                    to="about"
                    offset={-50}
                >
                    about-me
                </Link>
                <Link
                    href="#projects"
                    className="px-4"
                    activeClass="active-nav"
                    smooth
                    spy
                    to="projects"
                    offset={-50}
                >
                    projects
                </Link>
                <Link
                    href="#contacts"
                    className="px-4"
                    activeClass="active-nav"
                    smooth
                    spy
                    to="contacts"
                    offset={-50}
                >
                    get-in-touch
                </Link>
            </Nav>
        </Navbar>
    )
}
