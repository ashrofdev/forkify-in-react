import React from 'react'
import './list.css'
import Recipe from './Recipe';


const RecipeList = ({recipes, click, page, pageAdd, pageSub}) => {
    const start = (page - 1) * 10
    const stop = page * 10
    
    if (recipes !== undefined) {
        const reducedRecipe = recipes.slice(start, stop)
        const recipe = reducedRecipe.map((e,i)=> {
            let rid=reducedRecipe[i].recipe_id
            return (
                <Recipe click={()=>click(rid)} key={reducedRecipe[i].recipe_id} 
                    id={reducedRecipe[i].recipe_id} name={reducedRecipe[i].title}
                    image={reducedRecipe[i].image_url} author={reducedRecipe[i].publisher}
                />
            )
        })
        return (
            
            <div className="list">
                <div className="simg">
                    <img className="spinner" alt="" src={require('../spinner.png')}/>
                </div>
                {recipe}
                <div className="pbuttons">
                    <button className="down" onClick={pageSub}>Page {page-1}</button>
                    <button className="up" onClick={pageAdd}>Page {page+1}</button>
                </div>
            </div>
        )
    } else {
        return 'UNABLE TO FETCH RECIPE'
    }
}
export default RecipeList