import React from 'react'
import Loading from '../components/Loading'
import ErrMess from '../components/ErrMess'

function RenderDish({dish}) {
    if(dish != null){
        return(
            <div>
                <h4>
                    {dish.name}
                </h4>
                <p>
                    {dish.description}
                </p>
            </div>
        );
    } else {
        return <div></div>
    }
}

const SingleDish = ({dish, isLoading, errMess}) => {
    console.log(dish);
    if (isLoading) {
        return <div className="page-wrapper"><Loading /></div>
    } else if (errMess) {
        return <div className="page-wrapper"><ErrMess mess={errMess} /></div>
    } else if(dish != null){
        return (
            <div className="page-wrapper">
                <RenderDish dish={dish} />
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

export default SingleDish;