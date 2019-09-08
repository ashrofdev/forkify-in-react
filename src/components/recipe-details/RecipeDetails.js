import React from 'react'
import './details.css'

const RecipeDetails = ({recipe}) => {
    return (
        <div className="details">
            <div className="rsimg simg">
                <img className="spinner" src={require('../spinner.png')}/>
            </div>
            <div className="rimg">
                <img src={recipe.image_url}/>
            </div>
            <h2>{recipe.title}</h2>
            <div className="rank">{recipe.social_rank}</div>
            <a hrer={recipe.publisher_url} className="publisher">{recipe.publisher}</a>
        </div>
    )
}
export default RecipeDetails

/* f2f_url: "http://food2fork.com/view/35478"
image_url: "http://static.food2fork.com/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg"
ingredients: (14) ["2 (10 inch) tortilla", "1 cup mozzarella, shredded", "3 tablespoons pizza sauce", "16 slices pepperoni", "1 tablespoon sliced black olives", "3 tablespoons pizza sauce", "1/2 cup mozzarella, shredded", "3 slices pepperoni", "1 tablespoon sliced black olives", "2 (10 inch) tortilla", "1 cup mozzarella, shredded", "4 tablespoons pizza sauce", "16 slices pepperoni", "1 tablespoon sliced black olives↵"]
publisher: "Closet Cooking"
publisher_url: "http://closetcooking.com"
recipe_id: "35478"
social_rank: 99.99999999999835
source_url: "http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html"
title: "Pizza Quesadillas (aka Pizzadillas)" */