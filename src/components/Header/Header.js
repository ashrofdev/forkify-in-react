import React from 'react'
import './head.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={require('./logo.png')}/>
            </div>
            <div className="search-box">
                search
            </div>
            <div className="likes">
                likes
            </div>
        </div>
    )
}
export default Header