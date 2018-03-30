import React from 'react';
import {Route, Link} from 'react-router-dom';
import Welcome from './welcome'
import Nav from './nav'
import Mac from './our_macarons'
import GiftParties from './gifts_parties'
import Contact from './contact'

export default () =>{
    return(
        <div className='container'>
            <Nav/>

            <Route exact path ='/' component={Welcome}></Route>
            <Route path ='/our_macarons' component={Mac}></Route>
            <Route path = '/gifts_parties' component={GiftParties}></Route>
            <Route path = '/contacts' component={Contact}></Route>
        </div>
    )
}

