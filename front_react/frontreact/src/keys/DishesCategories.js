import React from 'react'
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined'

export default {
    dishes: {
        name: "Dishes",
        icon: <RestaurantMenuIcon />
    },
    deserts: {
        name: "Deserts",
        icon: <CakeOutlinedIcon />
    },
    drinks: {
        name: "Drinks",
        icon: <FreeBreakfastOutlinedIcon />
    } 
}