import '../css/timeline.min.css'
import { ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

const TimelineItem = ({ date, title, children }) => (
    <ListGroup.Item className="timeline-item mb-2 ">
        <p className="tmb-2">{date}</p>
        <h4 className="fw-bold animate__animated animate__fadeIn animate__slow">
            {title}
        </h4>
        <p className="animate__animated animate__fadeIn animate__slow">
            {children}
        </p>
    </ListGroup.Item>
)

TimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired, // 'node' can be any renderable prop (string, number, element, array, fragment, etc.)
}

export const Timeline = () => {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem')
    }

    return (
        <div className="mx-5 ">
            <ListGroup as="ul" className="timeline">
                <TimelineItem date="1993-2012" title="One must start somewhere">
                    Born in Naples, Italy. This first full-time job taught me
                    inhuman curiosity and a propensity for problem solving (aka
                    fix the tv for grandma). Here I met my first companion, the
                    computer.
                </TimelineItem>
                <TimelineItem date="2012-2018" title="The original plan">
                    I got transferred to my next job: architecture student. Here
                    I learned how to transform ideas into reality, new tools to
                    explore the 3d realm and met new, lifelong friends.
                </TimelineItem>
                <TimelineItem date="2013-" title="Crossing dimensions">
                    Built my first 3d printer. Ideas could now be transformed
                    into reality in a matter of hours. Also, early 3d printing
                    was messy, so this further developed my problem solving
                    skills.
                </TimelineItem>
                <TimelineItem
                    date="2015-2018"
                    title="Prototype, prototype, prototype"
                >
                    Beginning of my carrer as Cad/3d designer for DeArtis
                    Digitale, were I designed, produced and engineered
                    prototypes for the most diverse clients, from the automotive
                    industry to the medical field.
                </TimelineItem>
                <TimelineItem date="2019-" title="Exploring sound">
                    Started working on my brand Unknown Devices, were I design,
                    develop and produce musical instruments with modern,
                    innovative features with an eye on human interaction.
                </TimelineItem>
            </ListGroup>
        </div>
    )
}
