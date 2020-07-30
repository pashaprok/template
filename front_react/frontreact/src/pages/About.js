import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { baseUrl } from '../shared/baseUrl'

import StartSection from '../components/StartSection'
import TitleSection from '../components/TitleSection'
import Section from '../components/Section'
import Loading from '../components/Loading'
import ErrMess from '../components/ErrMess'
import LinkOut from '../components/LinkOut'

import InstagramIcon from '@material-ui/icons/Instagram'
import TelegramIcon from '@material-ui/icons/Telegram'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

const useStyles = makeStyles(() => ({
    fullImg: {
      width: "100%",
      display: "block"
    }
}));

function RenderWorkerItem({ worker }) {
    const classes = useStyles();
    const srcImg = baseUrl + worker.photo;

    return (
        <div className="worker-item">
            <img 
                src={srcImg} 
                alt="employee"  
                className={classes.fullImg} 
            />
            <div className="worker-item-body">
                <h4>
                    {worker.name}
                </h4>
                <p>
                    {worker.position}
                </p>
                <div className="social">
                    <LinkOut
                        link={worker.instagram}
                        cls="soc-worker-link"
                    >
                        <InstagramIcon />
                    </LinkOut>
                    <LinkOut
                        link={worker.telegram}
                        cls="soc-worker-link"
                    >
                        <TelegramIcon />
                    </LinkOut>
                    <LinkOut
                        link={worker.mail}
                        cls="soc-worker-link"
                    >
                        <MailOutlineIcon />
                    </LinkOut>
                </div>
            </div>
        </div>
    );
}

export default function About(props) {
    const classes = useStyles();

    const listWorkers = props.workers.workers.map((worker) => {
        let show;

        if (props.workers.isLoading) {
            show = <Loading />;
        } else if (props.workers.errMess) {
            show =  <ErrMess 
                        mess={props.workers.errMess} 
                    />;
        } else {
            show =  <RenderWorkerItem
                        worker={worker}
                    />;
        }

        return (
            <Grid item xs={4} key={worker._id}>
                {show}
            </Grid>
        );
    });

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
            ><>
                <TitleSection
                    title="Our Employees"
                    subtitle="Dolor sit amet consectetur adipisicing elit"
                />
                <div className="workers-list">
                    <Grid container>
                        {listWorkers}
                    </Grid>
                </div></>
            </Section>
        </div>
    )
}
