import React from "react";

import SearchBar from "../../Header/SearchBar";

//CSS
import "./Explore-styles.css";

const Explore = () => {
  return (
    <>
     <div className="container">
     <h1>Wiki Ideas</h1>
      <h3>Open free enciclopedia</h3> 
      
      <button className="btn1  ">Create an Articles</button>
     
  <SearchBar/>
     </div>
    </>
  );
};

export default Explore;
