import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import Loading from '../components/Loading'
import ErrMess from '../components/ErrMess'
import { baseUrl } from '../shared/baseUrl'
import './styles/singledish.css'

function RenderDish({ dish }) {
    const srcImg = baseUrl + dish.image;

    if(dish != null){
        return(
            <div className="dish">
                <div className="dish-image__wrapper">
                    <img 
                        src={srcImg} 
                        alt={dish.name}
                        className="fullwidth-image"
                    />
                </div>
                <div className="dish-header">
                    <h2 className="name">
                        {dish.name}
                    </h2>
                    <span className="price">
                        {dish.price}$
                    </span>
                </div>
                <div className="dish-body">
                    <p className="dish-description">
                        {dish.description}
                    </p>
                </div>
            </div>
        );
    } else {
        return <div></div>
    }
}

function RenderComments({comments}) {
    console.log(comments);
    const list = comments.map((comment) => {
        return(
            <div key={comment._id}>
                {comment.comment}
            </div>
        );
    })

    return (
        <div className="comments-section">
            <div className="comments-list">
                { comments.length < 1 ? <p>no comments yet...</p> : list }
            </div>
        </div>
    );
}

const SingleDish = ({ dish, isLoading, errMess }) => {
    if (isLoading) {
        return <div className="page-wrapper"><Loading /></div>
    } else if (errMess) {
        return <div className="page-wrapper"><ErrMess mess={errMess} /></div>
    } else if(dish != null){
        return (
            <div className="page-wrapper">
                <Container maxWidth="lg">
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <RenderDish dish={dish} />
                        </Grid>
                        <Grid item xs={6}>
                            <RenderComments comments={dish.comments} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

export default SingleDish;