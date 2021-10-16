import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CharacterGrid from './components/grids/CharacterGrid';
import CharacterDetails from './components/character Details/CharacterDetails';
import EpisodeGrid from './components/grids/EpisodesGrid';
import LocationGrid from './components/grids/LocationGrid';
// import Residents from './components/grids/Residents';

function App() {

  return (
    <div className='text-white'>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/characters' component={CharacterGrid} />
        <Route path='/locations' component={LocationGrid} />
        <Route path='/episodes' component={EpisodeGrid} />
        {/* <Route path='/location-Residents/:id' component={Residents} /> */}
        <Route path='/characterDetails/:id' component={CharacterDetails} />
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  );
}

export default App;
