import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import RecipeList from './components/recipe list/RecipeList';
import RecipeDetails from './components/recipe-details/RecipeDetails';
import ShoppingList from './components/shopping-list/ShoppingList';


const key = 'd5bb331a6b84d053e3b6e2e8c1cec561'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [],
      recipeDetails: [],
      ingredients: []
    }
  }
  click = async (rid) => {
    document.querySelector('.rsimg').classList.add('show')
    console.log('loading...')
    await fetch(`https://www.food2fork.com/api/get?key=${key}&rId=${rid}`).then((response)=>{
        return response.json()
      }).then((data)=>{
          this.setState({recipeDetails: data.recipe})
          console.log(this.state.recipeDetails)
          document.querySelector('.rsimg').classList.remove('show')
          this.setState({ingredients: data.recipe.ingredients})
          console.log('done')
    })
  }
  onSearch = async () => {
    document.querySelector('.simg').classList.add('show')
    console.log('loading...')
    const search = document.querySelector('input').value
    await fetch(`https://www.food2fork.com/api/search?key=${key}&q=${search}`)
    .then((response)=>{
        return response.json()
    }).then((data)=>{
      this.setState({recipes: data.recipes})
      document.querySelector('.simg').classList.remove('show')
      document.querySelectorAll('.recipe').forEach((e)=>{
        e.classList.toggle('ani')
      })
        console.log(this.state.recipes)
        console.log('done')
    }).catch((err)=>{
      document.querySelector('.simg').classList.remove('show')
      this.setState({recipes: undefined})
    })
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header search={this.onSearch}/>
          <RecipeList recipes={this.state.recipes} click={this.click}/>
          <RecipeDetails recipe={this.state.recipeDetails} ingredients={this.state.ingredients}/>
          <ShoppingList/>
        </div>
      </div>
    );
  }
}

export default App;
