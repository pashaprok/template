import React from 'react'
import { Link } from 'react-router-dom'
import StartSection from '../components/StartSection'
import Section from '../components/Section'
import { baseUrl } from '../shared/baseUrl'

import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Loading from '../components/Loading'
import ErrMess from '../components/ErrMess'

import categories from '../keys/DishesCategories'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    fullImg: {
      width: "100%",
      display: "block"
    }
}))

function RenderMenuItem({ dish }) {
    const classes = useStyles();
    const srcImg = baseUrl + dish.photo;

    return (
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
                    <Link to="/">
                        {dish.name}
                    </Link>
                </div>
                <div className="dish-price">
                    {dish.price} $
                </div>
           </div>
       </div> 
    );
}

function MenuList({ category, list }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${category.name}-content`}
                    id={`${category.name}-header`}
                >
                    <Typography className={classes.heading}>
                        {category.name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {list}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

function Content({ list, loading, error }) {
    if (loading) {
        return <Loading />
    } else if(error) {
        return <ErrMess mess={error} />
    } else {
        return(
            <>
                <MenuList 
                    category={categories.dishes}
                    list={list.listDishes}
                /> 
                <MenuList 
                    category={categories.deserts}
                    list={list.listDeserts}
                /> 
                <MenuList 
                    category={categories.drinks}
                    list={list.listDrinks}
                /> 
            </>
        );
    }
}

export default function Restaurant(props) {
    const listDishes = props.dishes.dishes.map((dish) => {
        if (dish.category === "dish") {
            return (
                <RenderMenuItem
                    dish={dish}
                    key={dish.id}
                />
            );
        } else {
            return null;
        }
    });

    const listDeserts = props.dishes.dishes.map((dish) => {
        if (dish.category === "desert") {
            return (
                <RenderMenuItem
                    dish={dish}
                    key={dish.id}
                />
            );
        } else {
            return null;
        }
    });

    const listDrinks = props.dishes.dishes.map((dish) => {
        if (dish.category === "drink") {
            return (
                <RenderMenuItem
                    dish={dish}
                    key={dish.id}
                />
            );
        } else {
            return null;
        }
    });

    const list = {
        dishes: listDishes,
        deserts: listDeserts,
        drinks: listDrinks
    };

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
                    list={list}
                    error={props.dishes.errMess}
                    loading={props.dishes.isLoading}
                />
            </Section>
        </div>
    )
}
