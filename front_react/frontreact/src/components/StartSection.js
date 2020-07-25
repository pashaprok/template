import React from 'react'
import './styles/startsection.css'

function Banner({extra, title, subtitle}) {
    return (
        <div className="banner-start">
            <h1>
                {title}
            </h1>
            <p>
                {subtitle}
            </p>
            <div>
                {extra}
            </div>
        </div>
    )
}

export default function StartSection({title, subtitle, bgi, extra}) {
    return (
        <header className={`start-section ${bgi}`}>
            <Banner 
                title={title}
                subtitle={subtitle}
                extra={extra}
            />
        </header>
    )
}