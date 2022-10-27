import React, { MouseEvent, MouseEventHandler, useState } from "react"
import "../styles/link.css"

const links: { title: string, url: string, id: string, sub?: string }[] = [
    {
        title: "Meet The Zuri Team",
        url: "https://training.zuri.team/",
        id: "btn__zuri",
    },
    {
        title: "Books By Zuri Team",
        url: "http://books.zuri.team/",
        id: "books",
        sub: "Click on the link to get the best books on design and coding to start/elevate your career as a designer or programmer."
    },
    {
        title: "The Best Python books",
        url: "https://books.zuri.team/python-for-beginners?ref_id=Dawkaka",
        id: "book__python",
    },
    {
        title: "Know your coders",
        url: "https://background.zuri.team",
        id: "pitch",
    },
    {
        title: "The Best Design Books",
        url: "https://books.zuri.team/design-rules",
        id: "book__design",
    }
]

const Link: React.FC<{ title: string, id: string, url: string, sub?: string }> = ({ url, title, id, sub }) => {
    const [showSub, setShowsub] = useState(false)
    const toggleSub = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (sub) {
            setShowsub(!showSub)
        }
    }
    return (
        <article className="zuri-link-article">
            <div className="link-wrapper">
                <a href={url} className="zuri-a tx-l" id={id}>
                    {title}
                </a>
                {
                    sub && <button onClick={toggleSub} className="toggle-button" style={{ transform: showSub ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0)" }}>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" id="arrow_down" data-name="arrow down" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="clipPath">
                                    <rect id="Mask" width="24" height="24" fill="none" stroke="#000" strokeWidth="1" />
                                </clipPath>
                            </defs>
                            <g id="_20x20_arrow-back--grey" data-name="20x20/arrow-back--grey" transform="translate(0 24) rotate(-90)">
                                <rect id="Mask-2" data-name="Mask" width="24" height="24" fill="none" />
                                <g id="_20x20_arrow-back--grey-2" data-name="20x20/arrow-back--grey" clipPath="url(#clipPath)">
                                    <g id="Group_2" data-name="Group 2" transform="translate(8 7)">
                                        <path id="Rectangle" d="M0,6.586V0H6.586" transform="translate(0.686 5.157) rotate(-45)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="1.5" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                }
            </div>
            {
                showSub && (
                    <p style={{ maxWidth: "min(90%, 500px)", textAlign: "center" }}>
                        {sub}
                    </p>
                )
            }
        </article>
    )
}


export const Links: React.FC = () => {
    return (
        <section id="links">
            {
                links.map(a => (
                    <Link {...a} key={a.url} />
                ))
            }
        </section>
    )
}