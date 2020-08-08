import React from 'react'
import { Link } from 'react-router-dom'
import StartSection from '../components/StartSection'
import Section from '../components/Section'
import { baseUrl } from '../shared/baseUrl'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Loading from '../components/Loading'
import ErrMess from '../components/ErrMess'

import categories from '../keys/DishesCategories'

const useStyles = makeStyles((theme) => ({
    fullImg: {
      width: "100%",
      display: "block"
    }
}))

function RenderMenuItem({ dish }) {
    const classes = useStyles();
    const srcImg = baseUrl + dish.image;

    return (
        <Grid item xs={3}>
            <div className="dish-item">
                <div className="dish-item__image">
                    <img 
                        src={srcImg} 
                        alt="dish"  
                        className={classes.fullImg} 
                    />
                </div>
                <div className="dish-item__body">
                    <div className="dish-name">
                        <Link to={`/restaurant/${dish._id}`}>
                            {dish.name}
                        </Link>
                    </div>
                    <div className="dish-price">
                        {dish.price} $
                    </div>
                </div>
            </div> 
        </Grid>
    );
}

function MenuList({ category, list }) {
    const renderList = list.map((dish) => {
        if(dish !== null) {
            return  <RenderMenuItem
                    dish={dish}
                    key={dish._id}
                />;
        } else {
            return null;
        }
    });

    return (
        <Paper className="dishes-category-section">
            <div className="category-header">
                <h3 className="title">
                    {category.name}
                </h3>
            </div>
            <div className="category-list">
                <Grid container spacing={1}>
                    {renderList}
                </Grid>
            </div>
        </Paper>
    );
}

function Content({ dishes, deserts, drinks, loading, error }) {
    if (loading) {
        return <Loading />
    } else if(error) {
        return <ErrMess mess={error} />
    } else {
        return(
            <>
                <MenuList 
                    category={categories.dishes}
                    list={dishes}
                /> 
                <MenuList 
                    category={categories.deserts}
                    list={deserts}
                /> 
                <MenuList 
                    category={categories.drinks}
                    list={drinks}
                /> 
            </>
        );
    }
}

export default function Restaurant(props) {
    const listDishes = props.dishes.dishes.map((dish) => {
        if (dish.category === "dish") {
            return dish;
        } else {
            return null;
        }
    });

    const listDeserts = props.dishes.dishes.map((dish) => {
        if (dish.category === "desert") {
            return dish;
        } else {
            return null;
        }
    });

    const listDrinks = props.dishes.dishes.map((dish) => {
        if (dish.category === "drink") {
            return dish;
        } else {
            return null;
        }
    });

    return (
        <div className="page-wrapper">
            <StartSection 
                title="Our Dishes Menu"
                subtitle="dolor sit amet consectetur adipisicing elit"
                bgi="restaurant-start"
            />
            <Section
                theme="light"
            >
                <Content 
                    dishes={listDishes}
                    deserts={listDeserts}
                    drinks={listDrinks}
                    error={props.dishes.errMess}
                    loading={props.dishes.isLoading}
                />
            </Section>
        </div>
    )
}
