import React from 'react'
import './list.css'
import Recipe from './Recipe';


const RecipeList = ({recipes, click}) => {
    
    if (recipes !== undefined) {
        const recipe = recipes.slice(0,10).map((e,i)=> {
            let rid=recipes[i].recipe_id
            return (
                <Recipe click={()=>click(rid)} key={recipes[i].recipe_id} 
                    id={recipes[i].recipe_id} name={recipes[i].title}
                    image={recipes[i].image_url} author={recipes[i].publisher}
                />
            )
        })
        return (
            
            <div className="list">
                <div className="simg">
                    <img className="spinner" src={require('../spinner.png')}/>
                </div>
                {recipe}
            </div>
        )
    } else {
        return 'UNABLE TO FETCH RECIPE'
    }
}
export default RecipeList