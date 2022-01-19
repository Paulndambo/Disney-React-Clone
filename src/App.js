import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Fragment>
            <Routes>
              <Route exact path="/detail" element={<MovieDetail />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Fragment>
      </Router>
    </div>
  );
}

export default App;
