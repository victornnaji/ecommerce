import React from 'react';
import Home from './pages/home/Home';
import {Switch, Route} from 'react-router-dom';
import newCollection from "./pages/NewCollection/NewCollection";
import Menu from './Components/menu/Menu';
import "./App.scss";
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <div className="appmenu">
        <Menu color="white" backgroundColor="transparent"/>
      </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={newCollection} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
