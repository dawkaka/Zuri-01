import React from "react";
import "../styles/profile.css"

export const Profile: React.FC<{ picture: string, twitterName: string, slackName: string }> = ({ picture, twitterName, slackName }) => {
    return (
        <section id="profile">
            <div className="menu_container">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99998 2.83332C8.46022 2.83332 8.83331 2.46023 8.83331 1.99999C8.83331 1.53975 8.46022 1.16666 7.99998 1.16666C7.53974 1.16666 7.16665 1.53975 7.16665 1.99999C7.16665 2.46023 7.53974 2.83332 7.99998 2.83332Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8333 2.83332C14.2935 2.83332 14.6666 2.46023 14.6666 1.99999C14.6666 1.53975 14.2935 1.16666 13.8333 1.16666C13.3731 1.16666 13 1.53975 13 1.99999C13 2.46023 13.3731 2.83332 13.8333 2.83332Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.16665 2.83332C2.62688 2.83332 2.99998 2.46023 2.99998 1.99999C2.99998 1.53975 2.62688 1.16666 2.16665 1.16666C1.70641 1.16666 1.33331 1.53975 1.33331 1.99999C1.33331 2.46023 1.70641 2.83332 2.16665 2.83332Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div>
                <img src={picture} height={88} width={88} style={{ borderRadius: "50%" }} id="profile__img" />
            </div>
            <div style={{ position: "relative" }}>
                <p className="tx-xl" id="twitter">{twitterName}</p>
                {/* or display none */}
                <p id="slack" style={{ visibility: "hidden", position: "absolute" }}>{slackName}</p>
            </div>
        </section>
    )
}