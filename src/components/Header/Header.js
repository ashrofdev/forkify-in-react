import React from 'react'
import './head.css'
import Search from '../search/Search';

const Header = ({search}) => {
    return (
        <div className="header">
            <div className="logo">
                <img src={require('./logo.png')} alt="logo"/>
            </div>
            <div className="search-box">
                <Search search={search}/>
            </div>
            <div className="likes">
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}
export default Header