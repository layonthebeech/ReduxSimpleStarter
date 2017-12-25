import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = "AIzaSyBwx7F6BF8qp8D4-9EArt6GGccnWmhNHLk";


const App = () => {
  return (
  <div> 
    <SearchBar />
  </div>
  )
};

//5 component types

ReactDOM.render(<App />, document.querySelector('.container'));