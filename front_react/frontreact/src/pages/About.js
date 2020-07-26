import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import StartSection from '../components/StartSection'
import TitleSection from '../components/TitleSection'
import Section from '../components/Section'

const useStyles = makeStyles(() => ({
    fullImg: {
      width: "100%"
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <div className="page-wrapper">
            <StartSection 
                title="About Us"
                subtitle="dolor sit amet consectetur adipisicing elit"
                bgi="about-start"
            />
            <Section
                theme="light"
            >
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <img 
                            src="assets/img/about.jpg" 
                            alt="about" 
                            className={classes.fullImg} 
                        />
                    </Grid>
                    <Grid item xs={6}>
                        another half
                    </Grid>
                </Grid>
            </Section>
            <Section
                theme="dark" 
            >
                <TitleSection
                    title="Our Employees"
                    subtitle="Dolor sit amet consectetur adipisicing elit"
                />
            </Section>
        </div>
    )
}
