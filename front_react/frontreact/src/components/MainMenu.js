import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuKeys from '../keys/MainMenu'

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
