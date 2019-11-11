import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from  './layout/Footer';
import Navbar from  './layout/Navbar';
import './assets/css/reset.css';
import './assets/css/app.css';

const CharactersContainer = lazy(() => import('././features/starwars/CharactersContainer'));
const MoviesContainer = lazy(() => import('././features/starwars/MoviesContainer'));

function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div data-testid="app">
          <Navbar label='Star Wars'/>
          <Route exact path="/" component={CharactersContainer} />
          <Route exact path="/movies" component={MoviesContainer} />
          <br />
          <br />
          <br />
          <Footer
            label='© 2019 Star Wars'
          />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
