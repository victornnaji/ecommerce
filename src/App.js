import React from 'react';
import Home from './pages/home/Home';
import {Switch, Route} from 'react-router-dom';
import newCollection from "./pages/NewCollection/NewCollection";



function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/shop" component={newCollection} />
     </Switch>
    </div>
  );
}

export default App;
