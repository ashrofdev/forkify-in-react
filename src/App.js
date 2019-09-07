import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import RecipeList from './components/recipe list/RecipeList';
import RecipeDetails from './components/recipe-details/RecipeDetails';
import ShoppingList from './components/shopping-list/ShoppingList';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <RecipeList/>
        <RecipeDetails/>
        <ShoppingList/>
      </div>
    </div>
  );
}

export default App;
