import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";


function App() {
  
 const [search, setSearch] = useState("");
 const [recipes, setRecipes] = useState([]);

  const APP_ID = "52a522f9"
  const APP_KEY = "8f0f2218344246cd7868a5b3d6092cf5";

  useEffect(() => {
    getRecipes();

  }, []);
   
  
  const getRecipes = async () => {
    const res  = await Axios.get(`https://api.edamam.com/search?q={search}&app_id=${APP_ID}&app_key=${APP_KEY}`
   );
   setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSearch(e.target.value);
  };
  
  return (
    <div className="App">
     <Header search = {search} onInputChange={onInputChange} />
     <div className="container">
     <Recipes recipes={recipes} />
     </div>
    </div>
  );
}

export default App;
