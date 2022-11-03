import React from "react"
import "../styles/contact.css"

export default function Contact() {
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
                                <input type="text" id="first_name" placeholder="Enter first name" className="text-md" />
                            </div>
                            <div className="contact-input-item-container">
                                <label className="contact-input-label" htmlFor="last_name">Last name</label>
                                <input type="text" id="last_name" placeholder="Enter last name" className="text-md" />
                            </div>
                        </div>
                        <div className="contact-input-item-container">
                            <label className="contact-input-label" htmlFor="last_name">Email</label>
                            <input type="email" id="email" placeholder="youremail@email.com" className="text-md" />
                        </div>
                        <div className="contact-input-item-container">
                            <label className="contact-input-label" htmlFor="last_name">Message</label>
                            <textarea
                                id="message"
                                placeholder="Send me a message and I'll reply you as soon as possible..."
                                className="text-md"
                            />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div className="contact-checkbox-container">
                                <input type={"checkbox"} className="contact-checkbox" />
                                <span className="checkmark"></span>
                            </div>
                            <label>You agree to providing your data to Dawkaka who may contact you.</label>
                        </div>
                        <button className="contact-btn-send-msg" onClick={(e) => e.preventDefault()}>Send message</button>
                    </form>

                </div>

            </main>

        </div>
    )
}