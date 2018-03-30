import React from 'react';
import {NavLink} from 'react-router-dom'
import './nav.css'

export default () =>{

    return (
        <ul className='nav nav-tabs mt-3'>
            <li className='nav-item'>
                <NavLink exact to='/' className='nav-link' activeClassName='active selected'>Welcome</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/our_macarons' className='nav-link' activeClassName='active selected'>Our Macarons</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/gifts_parties' className='nav-link' activeClassName='active selected'>Gifts and Parties</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/contacts' className='nav-link' activeClassName='active selected'>Contacts</NavLink>
            </li>
        </ul>
    )
}