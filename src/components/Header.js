import React from "react";


const Header = (props) => {

   const {search, onInputChange} = props;

    return (
        <div className="jumbotron">
            <h1 className="display-1">
                <i className="material-icons brand-icon">fastfood</i>Food Recipe
            </h1>
            <div class="input-group w-50 mx-auto">
  <input 
  type="text" 
  class="form-control" 
  placeholder="search your recipes here..." 
  value={search}
  onChange= {props.onInputChange}
   />
  <div class="input-group-append">
    <button className="btn btn-dark">Search Recipes</button>
  </div>
</div>

        </div>
        
    );
};


export default Header;