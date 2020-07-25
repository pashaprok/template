import React from 'react'
import { Link } from 'react-router-dom'
import StartSection from '../components/StartSection'

export default function Error() {
    const goHome = <Link to="/">return home</Link>;

    return (
        <div className="page-wrapper">
            <StartSection 
                title="Not Found"
                subtitle=""
                bgi="nf-start"
                extra={goHome}
            />
        </div>
    )
}
