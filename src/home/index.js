import React, { Component } from 'react'
import NavigationMenuComponent from '../navigationMenu/navigationMenu';


export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <NavigationMenuComponent />
                <div>
                    <p>Home page : http://localhost:3000/</p>
                    <p>Access to Prestation page by : http://localhost:3000/prestations/</p>
                </div>
            </div>
        )
    }
}