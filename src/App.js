import React from 'react';
import Home from './pages/home/Home';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from "./pages/NewCollection/ShopPage";
import Menu from './Components/menu/Menu';
import "./App.scss";
import Footer from './Components/Footer/Footer';
import Signin from './pages/signing/Signin';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import {connect} from "react-redux";
import {setCurrentUser} from './redux/user/user.action';
import Checkout from './pages/checkout/Checkout';



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


    render(){
      return (
        <div className="App">
            <Menu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) :
            <Signin />} />
            <Route exact path="/checkout" component={Checkout} />
            </Switch>
            <Footer />
        </div>
      );
    }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
