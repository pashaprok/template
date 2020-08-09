import React from 'react'

import HomeIcon from '@material-ui/icons/Home'
import ImportContactsIcon from '@material-ui/icons/ImportContacts'
import RestaurantIcon from '@material-ui/icons/Restaurant'

const MenuKeys = [
    {
        name: "Home",
        link: "/",
        icon: <HomeIcon />
    },
    {
        name: "About us",
        link: "/about",
        icon: <ImportContactsIcon />
    },
    {
        name: "Restaurant",
        link: "/restaurant",
        icon: <RestaurantIcon />
    }
];

export default MenuKeys;