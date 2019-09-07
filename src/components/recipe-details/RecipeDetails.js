import React from 'react'
import './details.css'

const RecipeDetails = ({recipe}) => {
    return (
        <div className="details">
            <div className="rimg">
                <img src={recipe.image_url}/>
            </div>
            <h2>{recipe.title}</h2>
        </div>
    )
}
export default RecipeDetails