import React, { Component } from 'react'
import './App.css'
import Film from './Components/Film'
import NavBar from './Components/NavBar'
import DetailFilm from './Components/DetailsFilm'
import './App.css'
class App extends React.Component {


  render() {
    return (
      <React.Fragment>

        <div className="NavBarTop">
          <NavBar />
        </div>
        
        <div className="allFilms">
          <Film />
        </div>
        {/* <div className="DetailFilm">
          <DetailFilm/>
        </div> */}
      </React.Fragment>
    );
  }
  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
}

export default App;
