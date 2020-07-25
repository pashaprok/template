import React from 'react'
import StartSection from '../components/StartSection'
import Section from '../components/Section'

export default function About() {
    return (
        <div className="page-wrapper">
            <StartSection 
                title="About Us"
                subtitle="dolor sit amet consectetur adipisicing elit"
                bgi="about-start"
            />
            <Section
                theme="light"
                fluid={false} 
            >
                about page
            </Section>
        </div>
    )
}
