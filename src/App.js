import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import RecipeList from './components/recipe list/RecipeList';
import RecipeDetails from './components/recipe-details/RecipeDetails';
import ShoppingList from './components/shopping-list/ShoppingList';


    const key = '589f73f2a566d81d99bbc4dc197b187f'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [],
      recipeDetails: []
    }
  }
  click = (rid) => {
    document.querySelector('.rsimg').classList.add('show')
    console.log('loading...')
    fetch(`https://www.food2fork.com/api/get?key=${key}&rId=${rid}`).then((response)=>{
        return response.json()
    }).then((data)=>{
        this.setState({recipeDetails: data.recipe})
        console.log(this.state.recipeDetails)
        document.querySelector('.rsimg').classList.remove('show')
        console.log('done')
    })
  }
  onSearch = () => {
    document.querySelector('.simg').classList.add('show')
    console.log('loading...')
    const search = document.querySelector('input').value
    fetch(`https://www.food2fork.com/api/search?key=${key}&q=${search}`)
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
      alert('unable to fetch api')
    })
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header search={this.onSearch}/>
          <RecipeList recipes={this.state.recipes} click={this.click}/>
          <RecipeDetails recipe={this.state.recipeDetails}/>
          <ShoppingList/>
        </div>
      </div>
    );
  }
}

export default App;
