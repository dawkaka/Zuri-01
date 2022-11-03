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
                                <input type="text" id="first_name" placeholder="Enter first name" />
                            </div>
                            <div className="contact-input-item-container">
                                <label className="contact-input-label" htmlFor="last_name">Last name</label>
                                <input type="text" id="last_name" placeholder="Enter last name" />
                            </div>
                        </div>
                        <div className="contact-input-item-container">
                            <label className="contact-input-label" htmlFor="last_name">Email</label>
                            <input type="email" id="email" placeholder="youremail@email.com" />
                        </div>
                        <div className="contact-input-item-container">
                            <label className="contact-input-label" htmlFor="last_name">Message</label>
                            <textarea type="email" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." />
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type={"checkbox"} className="contact-checkbox" />
                            <p>You agree to providing your data to Dawkaka who may contact you.</p>
                        </div>
                        <button className="contact-btn-send-msg">Send message</button>
                    </form>

                </div>

            </main>

        </div>
    )
}