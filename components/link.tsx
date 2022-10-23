import React from "react"
import "../styles/link.css"

export const Link: React.FC<{ title: string, id: string, url: string }> = ({ url, title, id }) => {
    return (
        <article className="zuri-link-article">
            <a href={url} className="tx-l" id={id}>
                {title}
            </a>
        </article>
    )
}