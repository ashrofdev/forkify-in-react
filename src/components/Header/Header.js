import React from 'react'
import './head.css'
import Search from '../search/Search';
import Recipe from '../recipe list/Recipe';

const Header = ({search, likesList}) => {
    const list = likesList.map((e,i)=> {
        return (
            <Recipe
                key={likesList[i].recipe_id} 
                    id={likesList[i].recipe_id} name={likesList[i].title}
                    image={likesList[i].image_url} author={likesList[i].publisher}
            />
        )
    })

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
            <div className="likes-list">{list}</div>
        </div>
    )
}
export default Header