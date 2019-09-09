import React from 'react'
import './details.css'
import 'font-awesome/css/font-awesome.min.css'


const RecipeDetails = ({recipe, ingredients, time}) => {
    const ing = ingredients.map((e, i) => {
        return (
            <div className="ingredient">
            <span></span>
                <p>{ingredients[i]}</p>
            </div>
        )
    });
    return (
        <div className="details">
            <div className="toshow">
                <div className="rsimg simg">
                    <img className="spinner" src={require('../spinner.png')}/>
                </div>
                <div className="rimg">
                    <img src={recipe.image_url}/>
                </div>
                <h2>{recipe.title}</h2>
                <div className="top">
                    <p className="time">{`${time} minutes`}</p>
                    <i className="fa fa-heart"></i>
                </div>
                <div className="rank">{`${Math.floor(recipe.social_rank - 2)}%`}</div>
                <div className="ing">
                    {ing}
                </div>
                <div className="how">
                    <h1>HOW TO COOK</h1>
                    <p>This recipe was carefully designed and tested by 
                    {recipe.publisher}. Please check out directions at their 
                    website.</p>
                    <a className="url" href={recipe.publisher_url}>directions</a>
                </div>
            </div>
        </div>
    )
}
export default RecipeDetails
