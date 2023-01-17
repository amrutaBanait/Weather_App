import React from 'react'
import "./style.css";

const temp = () => {
  return (
   <>
   <div className="wrap">
    <div className="search">
    <input 
    type="text" 
    placeholder = "Search..."
    autofocus
    id="search"
    className="searchTerm"
    />
     <button className="searchButton" type="button">
        Search
    </button>
    </div>
   
   </div>
   </>
  )
}

export default temp