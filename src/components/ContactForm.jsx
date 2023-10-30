import '../css/contact.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast',
        })
    }

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data
        try {
            const templateParams = {
                name,
                email,
                subject,
                message,
            }

            await emailjs.send(
                'portfolio_contact',
                'template_wy9nr0c',
                templateParams,
                'ZVFtTwdRcRJ9O8eI2'
            )

            reset()
            toastifySuccess()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Container className="text-start">
                <Row>
                    <Col className="col-12">
                        <div className="contactForm">
                            <Form
                                id="contact-form"
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                            >
                                {/* Row 1 of form */}
                                <Row className="row formRow">
                                    <Col className="col-sm-4 p-1">
                                        <input
                                            type="text"
                                            name="name"
                                            {...register('name', {
                                                required: {
                                                    value: true,
                                                    message:
                                                        'Please enter your name',
                                                },
                                                maxLength: {
                                                    value: 30,
                                                    message:
                                                        'Please use 30 characters or less',
                                                },
                                            })}
                                            className="form-control form-input"
                                            placeholder="Name"
                                        ></input>
                                        {errors.name && (
                                            <span className="errorMessage">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </Col>
                                    <Col className="col-sm-4 p-1">
                                        <input
                                            type="email"
                                            name="email"
                                            {...register('email', {
                                                required: true,
                                                pattern:
                                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            })}
                                            className="form-control form-input"
                                            placeholder="Email address"
                                        ></input>
                                        {errors.email && (
                                            <span className="errorMessage">
                                                Please enter a valid email
                                                address
                                            </span>
                                        )}
                                    </Col>
                                </Row>
                                {/* Row 2 of form */}
                                <Row className="formRow">
                                    <Col className="col-sm-8 p-1">
                                        <input
                                            type="text"
                                            name="subject"
                                            {...register('subject', {
                                                required: {
                                                    value: true,
                                                    message:
                                                        'Please enter a subject',
                                                },
                                                maxLength: {
                                                    value: 75,
                                                    message:
                                                        'Subject cannot exceed 75 characters',
                                                },
                                            })}
                                            className="form-control form-input"
                                            placeholder="Subject"
                                        ></input>
                                        {errors.subject && (
                                            <span className="errorMessage">
                                                {errors.subject.message}
                                            </span>
                                        )}
                                    </Col>
                                </Row>
                                {/* Row 3 of form */}
                                <Row className="formRow">
                                    <Col className="col-sm-8 p-1">
                                        <textarea
                                            rows={3}
                                            name="message"
                                            {...register('message', {
                                                required: true,
                                            })}
                                            className="form-control form-input"
                                            placeholder="Message"
                                        ></textarea>
                                        {errors.message && (
                                            <span className="errorMessage">
                                                Please enter a message
                                            </span>
                                        )}
                                    </Col>
                                </Row>
                                <Button
                                    size="lg"
                                    variant="warning"
                                    className="m-2"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <ToastContainer />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
