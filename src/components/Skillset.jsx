import { Button, Row } from 'react-bootstrap'
import '../css/skillset.min.css'

export const Skillset = () => {
    const skills = [
        'C++',
        'Blender',
        'AfterEffects',
        'Premiere',
        'Photoshop',
        'Python',
        'React',
        'Javascript',
        'KiCad',
        'Illustrator',
        'Fusion 360',
        'Soldering',
        'Woodworking',
        '3D printing',
        'VSCode',
    ]

    // Function to shuffle the skills array
    const shuffleSkills = (array) => {
        let currentIndex = array.length,
            randomIndex,
            temporaryValue

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            // And swap it with the current element.
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }

        return array
    }

    const shuffledSkills = shuffleSkills([...skills])

    let lastColorIndex = -1 // Initialize to an index that doesn't exist in the colors array

    const getRandomColorClass = () => {
        const colors = ['primary', 'warning', 'success']

        let randomIndex
        do {
            randomIndex = Math.floor(Math.random() * colors.length)
        } while (randomIndex === lastColorIndex)

        lastColorIndex = randomIndex
        return colors[randomIndex]
    }
    return (
        <div className="skill-container p-5 sticky-sm-top">
            <Row>
                <h3 className="m-2">Skillset</h3>
                <p className="m-2">
                    Since I was in the womb I&apos;ve always been attracted to
                    learning new stuff. Whenever I see anything the first thing
                    that comes to my mind is how I would approach making it.
                    I&apos;ve gotten hands-on experience with a good mix of
                    tools and platforms. I&apos;m pretty comfortable with:
                </p>
            </Row>
            <Row className="justify-content-end animate__animated animate__fadeIn animate__slow animate__delay-1s">
                {shuffledSkills.map((skill) => (
                    <Button
                        key={skill}
                        size="lg"
                        variant={getRandomColorClass()}
                        className={`m-2 col-md-auto`}
                    >
                        {skill}
                    </Button>
                ))}
            </Row>
        </div>
    )
}
