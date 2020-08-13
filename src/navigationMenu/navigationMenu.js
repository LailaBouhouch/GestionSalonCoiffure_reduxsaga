import React, { Component } from 'react'
import { MenuList, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class NavigationMenuComponent extends Component {
    render() {
        return (
            <div className="list">
               <MenuList>
                    <MenuItem component={Link} to="/">Accueil</MenuItem>
                    <MenuItem>Prestation</MenuItem>
                    <MenuItem>Employé</MenuItem>
               </MenuList> 
            </div>
        )
    }
}