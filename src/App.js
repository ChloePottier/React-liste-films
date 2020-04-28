import React, { useState } from 'react';
import './App.css'
// import Film from './Components/Film'
import NavBar from './Components/NavBar'
import Search from './Components/Search'
import Results from './Components/Results'
import Trending from './Components/Trending'
import Popup from './Components/Popup'
import axios from 'axios'
import './App.css'
// import ButtonDetails from './Components/ButtonDetails'
// class App extends React.Component {


//   render() {
//     return (
//       <React.Fragment>

//         <div className="NavBarTop">
//           <NavBar />
//         </div>
//         {/* <div className="allFilms">
//           <ButtonDetails />
//         </div> */}

//           {/* <Film /> */}
//         {/* </div> */}
//         {/* <div className="DetailFilm">
//           <DetailFilm/>
//         </div> */}
//       </React.Fragment>
//     );
//   }
  function App() {
// Déclare une nouvelle variable d'état. on a plusieurs états a gérer.
// ici on l'a appelé state mais ca aurait pu être n'importe quoi
//useState remplace this.state. on lui passent les états initiaux
    let [state, setState] = useState({
      s: "",// état de la recherche.String
      results: [], // état du résultat de la recherche. Tableau (depuis l'api, fichier json)
      selected: {}, // état de la popup. Objet
      trends:[]
    });
    // const trending = (e) => {
      axios('https://api.themoviedb.org/3/trending/movie/day?api_key=30b4239b5ea618dab97189fb606a4ed6&language=fr')
      .then(({data}) => {
        let trends = data; 
        setState(prevState => {
          return { 
            //Spread synthaxe. on retourne l'objet this.state 
            ...prevState, 
          trends: trends.results}
          });
          
      });
    // }
// déclaration de la variable {search} c'est elle qui va porter les données plus bas :
// <Search recherche={recherche} search={search}/>
  const search = (e) => {

    //si l'évenement est stricte égale à la touche entrer est pressée alors
    if(e.key === "Enter"){
      // on va chercher dans l'api avec axios, tous les film en raport avec ce qui envoyé dans input
      axios('https://api.themoviedb.org/3/search/movie?api_key=30b4239b5ea618dab97189fb606a4ed6&language=fr&query='+ state.s)
      // on fait la boucle dans les composants  result(s).js
      .then(({data}) => {
        //quand il y a des données, results = ces données
        let results = data;
        // mettre l'état. 
        setState(prevState => {
          return { 
            //Spread synthaxe. on retourne l'objet this.state 
            ...prevState, 
          //retourne l'état results qui est égale au array results du map (dans les functions result.js et results.js)
          results: results.results}
          //etat result: données.ancrage du tableau
        })

      });
    }
  }
  // on déclare la var recherche qui servira en bas // <Search recherche={recherche} search={search}/>
  const recherche = (e) =>{
    let maRecherche = e.target.value;
    // permet de changer l'état : l'état précédent prend  la valeur du input
    setState( prevState => {
      // et on retourne ce résultat dans l'état s
      return{   
        //Spread synthaxe. on retourne l'objet this.state    
        ...prevState, 
        // l'état s prend la valeur de l'input
        s: maRecherche}
    });

  }
  const openpopup = (e, id) => {
    axios('https://api.themoviedb.org/3/movie/' + id + '?api_key=30b4239b5ea618dab97189fb606a4ed6&language=fr&query=iron')
    .then(({data}) => {
      let result = data; 
      console.log(result);
      setState(prevState => {
        return { 
          //Spread synthaxe. on retourne l'objet this.state 
          ...prevState, 
        selected: result}
        });
        
    });
    // console.log(state.selected)
  }
 

  // console.log(state.trends[0])
    return (
      <div className="App">
          <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Le input et ses props */}
              <Search recherche={recherche} search={search}/>
              {/* Dans Results on affiche l'état de results: 
              résultat de la recherche  */}
            {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected}  /> : false}
              {/* {(typeof state.results != []) ? <Results results={state.results} openpopup={openpopup} /> : <Trending trends={state.trends}/> } */}
              <Results results={state.results} openpopup={openpopup} />
              <Trending trends={state.trends}/>
            </div>

          </div>
        </div>
      </div>
      
    );
  
}
export default App;
