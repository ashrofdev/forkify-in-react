import React from 'react'
import './list.css'
import Recipe from './Recipe';



const RecipeList = ({recipes}) => {
    
    const recipe = recipes.map((e,i)=> {
        const click = () => {
            console.log(recipes[i].recipe_id)
        }
        return (
            <Recipe click={click} key={recipes[i].recipe_id} id={recipes[i].recipe_id} name={recipes[i].title}
                image={recipes[i].image_url} author={recipes[i].publisher}
            />
        )
    });
    return (
        
        <div className="list">
            {recipe}
        </div>
    )
}
export default RecipeList