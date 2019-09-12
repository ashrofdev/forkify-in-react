import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import RecipeList from './components/recipe list/RecipeList';
import RecipeDetails from './components/recipe-details/RecipeDetails';
import ShoppingList from './components/shopping-list/ShoppingList';

//d5bb331a6b84d053e3b6e2e8c1cec561*
//5a9f62241058604119173d56902e498e*
//cd415bc4d63c37859d9c235af09bb1ac*
//5df8b827c173c66cb319751ca0d8a699

const key = '5df8b827c173c66cb319751ca0d8a699'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [],
      recipeDetails: [],
      ingredients: [],
      shoppingList: [],
      likes: [],
      likesList: [],
      time: 0,
      page: 2,
    }
  }


  componentDidMount(){
    document.querySelector('.back').addEventListener('click', () =>{
      document.querySelector('.list').classList.add('listuo')
      document.querySelector('.details').classList.remove('respon')
    })
    window.addEventListener('keypress', (e) =>{
      console.log(e.key)
      if (e.key === 'Enter') {
        this.search()
      }
    })
  }

  search = async () => {
    document.querySelector('.details').classList.remove('respon')
    document.querySelector('.simg').classList.add('show')
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
      console.log(err)
    })
  }

  click = async (rid) => {
    document.querySelector('.details').classList.add('respon')
    const time = Math.ceil(Math.random() * (30 - 15)) + 15;
    this.setState({time: time})
    document.querySelector('.toshow').classList.add('dshow')
    document.querySelector('.rsimg').classList.add('show')
    await fetch(`https://www.food2fork.com/api/get?key=${key}&rId=${rid}`).then((response)=>{
        return response.json()
      }).then((data)=>{
          this.setState({recipeDetails: data.recipe})
          document.querySelector('.rsimg').classList.remove('show')
          this.setState({ingredients: data.recipe.ingredients})
    }).catch((err)=> {
      console.log(err)
    })
  }
  onSearch = () => {
    this.search()
  }
  renderIngeredients = () => {
    this.setState({shoppingList: this.state.ingredients})
  }

  pageAdd = () => {
    this.setState({page: this.state.page + 1})
  }
  pageSub = () => {
    this.setState({page: this.state.page - 1})
  }


  onLike = () => {
    document.querySelector('.top .fa').classList.toggle('fa-heart-o')
    console.log(this.state.likes, 'likes list')
    this.state.likes.forEach(e=>{
      console.log(e, 'eeeeeee')
      if (e === this.state.recipeDetails) {
        console.log('already there')
      } else {
        this.state.likes.push(this.state.recipeDetails)
        this.setState({likesList: this.state.likes})
      }
    })
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header search={this.onSearch} likesList={this.state.likesList}/>
          <RecipeList recipes={this.state.recipes} click={this.click}
            page={this.state.page} pageAdd={this.pageAdd} pageSub={this.pageSub}
          />
          <RecipeDetails recipe={this.state.recipeDetails}
           ingredients={this.state.ingredients}
             time={this.state.time} renderIngeredients={this.renderIngeredients}
             likes={this.onLike}
           />
          <ShoppingList shoppingList={this.state.shoppingList}/>
        </div>
      </div>
    );
  }
}

export default App;
