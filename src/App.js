import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import RecipeList from './components/recipe list/RecipeList';
import RecipeDetails from './components/recipe-details/RecipeDetails';
import ShoppingList from './components/shopping-list/ShoppingList';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: []
    }
  }
  onSearch = () => {
    const key = 'd5bb331a6b84d053e3b6e2e8c1cec561'
    console.log('loading...')
    const search = document.querySelector('input').value
    fetch(`https://www.food2fork.com/api/search?key=${key}&q=${search}`)
    .then((response)=>{
        return response.json()
    }).then((data)=>{
      this.setState({recipes: data.recipes})
        console.log(this.state.recipes)
        console.log('done')
    })
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header search={this.onSearch}/>
          <RecipeList recipes={this.state.recipes}/>
          <RecipeDetails/>
          <ShoppingList/>
        </div>
      </div>
    );
  }
}

export default App;
