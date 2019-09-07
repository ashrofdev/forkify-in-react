import React from 'react'
import './list.css'
import Recipe from './Recipe';


const RecipeList = ({recipes}) => {
    const recipe = recipes.map((e,i)=> {
        return (
            <Recipe key={recipes[i].recipe_id} name={recipes[i].title}
                image={recipes[i].image_url} author={recipes[i].publisher}
            />
        )
    });
    return (
        
        <div className="list">
            {recipe}gfg
        </div>
    )
}
export default RecipeList