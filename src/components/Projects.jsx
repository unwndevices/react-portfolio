import '../css/projects.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useRef, useEffect } from 'react'

import PropTypes from 'prop-types'

const projects = [
    {
        title: 'Glitch Art',
        year: '2019-2020',
        images: [
            {
                src: 'images/glitch/crystal.webp',
                alt: 'Crystals',
            },
            {
                src: 'images/glitch/self.webp',
                alt: 'Self Portrait',
            },
            {
                src: 'images/glitch/no_ord_mom.webp',
                alt: 'no ordinary moments videoclip',
                link: 'https://www.google.com',
                description:
                    'Stillframe of a videoclip I made for my song "No Ordinary Moments", under the alias "UNWN".',
            },
        ],
    },
    {
        title: 'Custom Bass',
        year: '2021',
        images: [
            {
                src: 'images/bass/bass_1.webp',
                alt: 'Bass',
            },
            {
                src: 'images/bass/bass_2.webp',
                alt: 'Bass',
            },
            {
                src: 'images/bass/bass_3.webp',
                alt: 'Bass',
            },
            {
                src: 'images/bass/bass_4.webp',
                alt: 'Bass',
            },
        ],
    },
]

function useHorizontalScroll() {
    const elRef = useRef()
    useEffect(() => {
        const el = elRef.current
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) return
                e.preventDefault()
                el.scrollLeft += e.deltaY
            }
            el.addEventListener('wheel', onWheel)
            return () => el.removeEventListener('wheel', onWheel)
        }
    }, [])
    return elRef
}

export const Projects = () => {
    return (
        <>
            {projects.map((project, index) => (
                <ProjectComponent key={index} project={project} />
            ))}
        </>
    )
}

const ProjectComponent = ({ project }) => {
    const scrollRef = useHorizontalScroll()

    return (
        <Row className="project">
            <Col className="col-sm-2">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-year">{project.year}</p>
            </Col>
            <Col className="col-sm-10 content-wrapper" ref={scrollRef}>
                <div className="d-flex flex-nowrap">
                    {project.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="image-wrapper">
                            {image.link ? (
                                <a
                                    href={image.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={image.src} alt={image.alt} />
                                </a>
                            ) : (
                                <img src={image.src} alt={image.alt} />
                            )}
                            {image.description && (
                                <div className="description-wrapper">
                                    {image.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    )
}

ProjectComponent.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                link: PropTypes.string,
                description: PropTypes.string,
            })
        ).isRequired,
    }).isRequired,
}
