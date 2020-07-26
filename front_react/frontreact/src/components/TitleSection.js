import React from 'react'
import './styles/titlesection.css'

export default function TitleSection({title, subtitle}) {
    return (
        <div className="title-section">
            <h4>
                {title}
            </h4>
            <p>
                {subtitle}
            </p>
        </div>
    )
}