import React, { useState } from "react"
import { isEmail, isMessage, isName } from "../lib/validators"
import "../styles/contact.css"

export default function Contact() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [firstNameErrors, setFirstNameErrors] = useState([])
    const [lastNameErrors, setLastNameErrors] = useState([])
    const [showErrors, setShowErrors] = useState([])
    const [emailErrors, setEmailErrors] = useState([])
    const [messageErrors, setMessageErrors] = useState([])

    const handleFirstName = (name) => {
        const errors = isName(name)
        setFirstNameErrors(errors)
        setFirstName(name)
    }

    const handleLastName = (name) => {
        const errors = isName(name)
        setLastNameErrors(errors)
        setLastName(name)
    }

    const handleEmail = (email) => {
        setEmailErrors(isEmail(email))
        setEmail(email)
    }

    const handleMessage = (message) => {
        setMessageErrors(isMessage(message))
        if (message.length > 500) return
        setMessage(message)
    }
    const noErros = firstNameErrors.length === 0 && lastNameErrors.length === 0 && emailErrors.length === 0 && messageErrors.length === 0 && firstName !== "" && lastName !== "" && email !== "" && message !== ""

    return (
        <div className="contact-container">
            <main className="contact-main">
                <div className="contact-content">
                    <div className="contact-header-container">
                        <h3 className="text-l" style={{ fontSize: "36px" }}>Contact Me</h3>
                        <p>Hi there, contact me to ask me about anything you have in mind.</p>
                    </div>
                    <form className="contact-form">
                        <div className="contact-name">
                            <div className="contact-input-item-container">
                                <label className="contact-input-label" htmlFor="first_name">First name</label>
                                <input
                                    type="text" id="first_name"
                                    placeholder="Enter first name" className="text-md"
                                    value={firstName}
                                    onBlur={() => setShowErrors(prv => [...prv, "first_name"])}
                                    onChange={(e) => handleFirstName(e.currentTarget.value)}
                                />
                                {
                                    showErrors.includes("first_name") && <InputHelpfulMessage messages={firstNameErrors} />
                                }
                            </div>
                            <div className="contact-input-item-container">
                                <label className="contact-input-label" htmlFor="last_name">Last name</label>
                                <input
                                    type="text" id="last_name" placeholder="Enter last name"
                                    className="text-md"
                                    value={lastName}
                                    onBlur={() => setShowErrors(prv => [...prv, "last_name"])}
                                    onChange={(e) => handleLastName(e.currentTarget.value)}
                                />
                                {
                                    showErrors.includes("last_name") && <InputHelpfulMessage messages={lastNameErrors} />
                                }
                            </div>
                        </div>
                        <div className="contact-input-item-container">
                            <label className="contact-input-label" htmlFor="email">Email</label>
                            <input
                                type="email" id="email"
                                placeholder="youremail@email.com" className="text-md"
                                value={email}
                                onBlur={() => setShowErrors(prv => [...prv, "email"])}
                                onChange={(e) => handleEmail(e.currentTarget.value)}

                            />
                            {
                                showErrors.includes("email") && <InputHelpfulMessage messages={emailErrors} />
                            }
                        </div>
                        <div className="contact-input-item-container">
                            <label className="contact-input-label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Send me a message and I'll reply you as soon as possible..."
                                className="text-md"
                                value={message}
                                onBlur={() => setShowErrors(prv => [...prv, "message"])}
                                onChange={(e) => handleMessage(e.currentTarget.value)}
                                style={{
                                    "--u-b-color": showErrors.includes("message") && messageErrors.length > 0 ? "#F89687" : "#84CAFF"
                                }}

                            ></textarea>
                            {
                                showErrors.includes("message") && <InputHelpfulMessage messages={messageErrors} error />
                            }
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                            <div className="contact-checkbox-container">
                                <input type={"checkbox"} className="contact-checkbox" />
                                <span className="checkmark"></span>
                            </div>
                            <label>You agree to providing your data to Dawkaka who may contact you.</label>
                        </div>
                        <button
                            style={{ backgroundColor: noErros ? "" : "#B2DDFF", borderColor: noErros ? "" : "#B2DDFF" }}
                            className="contact-btn-send-msg" onClick={(e) => e.preventDefault()} id="btn__submit">Send message</button>
                    </form>

                </div>

            </main>

        </div>
    )
}

const InputHelpfulMessage = ({ messages, error }) => {
    if (messages.length === 0) return null
    return (
        <div>
            {
                messages.map(message => <p className="text-md" style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    margin: 0,
                    color: error ? "#F83F23" : ""
                }}
                    key={message}
                > {message}</p >)
            }
        </div>

    )
}