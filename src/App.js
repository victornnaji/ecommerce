import React from 'react';
import Home from './pages/home/Home';
import {Switch, Route} from 'react-router-dom';
import newCollection from "./pages/NewCollection/NewCollection";
import Menu from './Components/menu/Menu';
import "./App.scss";
import Footer from './Components/Footer/Footer';
import Signin from './pages/signing/Signin';
import {withRouter} from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.util';



class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


    render(){
      return (
        <div className="App">
            <Menu currentUser={this.state.currentUser}/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={newCollection} />
              <Route exact path="/signin" component={Signin} />
            </Switch>
            <Footer />
        </div>
      );
    }
}

export default withRouter(App);
