import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import './styles/section.css'

export default function Section({theme, children, extraClass, fluid}) {
    let isFluid;
        if(fluid) {
            isFluid = <>{children}</>;
        } else {
            isFluid = <Container maxWidth="lg">{children}</Container>;
        }

    return (
        <div className={`section ${theme} ${extraClass}`}>
            <CssBaseline />
            {isFluid}
        </div>
    )
}
