import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'

import Cart from '../pages/Cart'
import Producto from '../pages/Producto'
import Contacto from '../pages/Contacto'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/productos/' component={Home}/>
            <Route path='/producto/:category/:brand/:id' component={Producto}/>

            <Route path='/contacto' component={Contacto}/>
            <Route path='/cart' component={Cart}/>
        </Switch>
    )
}

export default Routes
