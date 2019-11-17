import React from 'react';
import Home from './pages/home/Home';
import {Switch, Route} from 'react-router-dom';
import newCollection from "./pages/NewCollection/NewCollection";
import Menu from './Components/menu/Menu';
import "./App.scss";
import Footer from './Components/Footer/Footer';
import Signin from './pages/signing/Signin';



function App() {
  return (
    <div className="App">
        <Menu color="black" backgroundColor="white"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={newCollection} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
