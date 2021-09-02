import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(``);
  const [query, setQuery] = useState(`chicken`)


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_CLIENT_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch(``)
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="recipe">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
