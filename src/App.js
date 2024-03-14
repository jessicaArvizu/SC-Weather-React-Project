import React from 'react'
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <div className="container weather-app">
        <header>
          <Search defaultCity="London" />
        </header>

        <main>


        </main>

        <footer>
          This project was coded by
          <a href="https://www.linkedin.com/in/jessica-arvizu/" target="_blank" rel="noopener noreferrer">
            {" "}
            Jessica Arvizu
          </a>
          , is open-sourced on
          <a href="https://github.com/jessicaArvizu/SC-Weather-React-Project" target="_blank" rel="noopener noreferrer">
            {" "}
            GitHub
          </a>
          , and hosted on
          <a href="www.google.com" target="_blank" rel="noopener noreferrer">
            {" "}
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
