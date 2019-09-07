import React from 'react'
import './list.css'
import Recipe from './Recipe';

const key = '5a9f62241058604119173d56902e498e'

const RecipeList = ({recipes, click}) => {
    
    const recipe = recipes.map((e,i)=> {
        let rid=recipes[i].recipe_id
        return (
            <Recipe click={()=>click(rid)} key={recipes[i].recipe_id} id={recipes[i].recipe_id} name={recipes[i].title}
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