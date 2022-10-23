import React from "react"
import "../styles/link.css"

const links = [
    {
        title: "Zuri Team",
        url: "https://training.zuri.team/",
        id: "btn__zuri"
    },
    {
        title: "Zuri Books",
        url: "http://books.zuri.team/",
        id: "books"
    },
    {
        title: "Python books",
        url: "https://books.zuri.team/python-for-beginners?ref_id=devGrammer",
        id: "book__python"
    },
    {
        title: "Background Check for Coders",
        url: "https://background.zuri.team",
        id: "pitch"
    },
    {
        title: "Design Books",
        url: "https://books.zuri.team/design-rules",
        id: "book__design"
    }
]

const Link: React.FC<{ title: string, id: string, url: string }> = ({ url, title, id }) => {
    return (
        <article className="zuri-link-article">
            <a href={url} className="tx-l" id={id}>
                {title}
            </a>
        </article>
    )
}


export const Links: React.FC = () => {
    return (
        <section id="links">
            {
                links.map(a => (
                    <Link {...a} />
                ))
            }
        </section>
    )
}