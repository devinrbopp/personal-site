import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return(
        <div id='header'>
            <h1>boppdev.io</h1>
            <nav>
                <ul className='nav_ul'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Devin</Link></li>
                </ul>
            </nav>
        </div>
    )
}