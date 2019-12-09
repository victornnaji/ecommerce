import React, { Component } from 'react';
import PaystackButton from 'react-paystack';
import "./Paystack.scss";

class Paystack extends Component {

    state = {
        key: "pk_test_7b220aabaf71a5b6bc2e78f5bd69429eac1dd2e5", //PAYSTACK PUBLIC KEY
        email: "nnajivictor0@gmail.com",  // customer email
        amount: this.props.amount //equals NGN100,
    }

    callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

  render() {
    return (
      <div>
        <p>
          <PaystackButton
            text="Make Payment"
            className="payButton"
            callback={this.callback}
            close={this.close}
            disabled={false} 
            embed={false} 
            reference={this.getReference()}
            email={this.state.email}
            amount={this.state.amount}
            currency="NGN"
            paystackkey={this.state.key}
            tag="button"
          />
        </p>
      </div>
    );
  }
}

export default Paystack;