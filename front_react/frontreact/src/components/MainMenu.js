import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

//icons
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

export default function MainMenu() {
    return (
        <List>
            {MenuKeys.map(({name, link, icon}) => (
                <Link to={link} key={name}>
                    <ListItem button>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}
