import React from 'react'
import './details.css'
import 'font-awesome/css/font-awesome.min.css'

// const like = () => {
//     document.querySelector('.top .fa').classList.toggle('fa-heart-o')
// }

const RecipeDetails = ({recipe, ingredients, time, renderIngeredients, likes}) => {
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
            <span className="back">&larr;</span>
            <div className="toshow">
                <div className="rsimg simg">
                    <img className="spinner" alt="" src={require('../spinner.png')}/>
                </div>
                <div className="rimg">
                    <img src={recipe.image_url} alt=""/>
                </div>
                <h2>{recipe.title}</h2>
                <div className="top">
                    <p className="time">{`${time} minutes`}</p>
                    <i onClick={likes} className="fa fa-heart fa-heart-o"></i>
                </div>
                <div className="rank">{`${Math.floor(recipe.social_rank - 2)}%`}</div>
                <div className="ing">
                    {ing}
                    <button onClick={renderIngeredients}>ADD TO SHOPPING LIST</button>
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
