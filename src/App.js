import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Login';
import PokemonList from './components/PokemonList';
import AddPokemon from './components/AddPokemon';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
            <div>
                <ul>
                    
                    
                </ul>
            </div>
            <div>
              <Route exact path="/" component={Login} />
              <Route exact path="/pokemonlist" component={PokemonList} />
              <Route exact path="/addpokemon" component={AddPokemon} />
            </div>
        </div>
    </Router>
    );
  }
}

export default App;
