import React from 'react';
import Choose from './Choose';
import "./Choose.scss";

const ChooseList = () => {
    const chooseList = [
        {
            id: 1,
            imageUrl: require('../../../assets/ship.png'),
            title: "Free Shipping",
            desc: "All purchases over ₦19,000 are eligible for free shipping via USPS First Class Mail."
        },
        {
            id: 2,
            imageUrl: require('../../../assets/happy.png'),
            title: "Easy Payment",
            desc: "All payments are processed instantly over a secure payment protocol."
        }, 
        {
            id: 3,
            imageUrl: require('../../../assets/dollar.png'),
            title: "Money-Back Guarantee",
            desc: "If an item arrived damaged or you've changed your mind, you can send it back for a full refund."
        },
        {
            id: 4,
            imageUrl: require('../../../assets/group.png'),
            title: "Finest Quality",
            desc: "Designed to last, each of our products has been crafted with the finest materials."
        }
    ];

    return (
        <div className="chooseList">
           <div className="container">
               <div className="chooselist-title">
                   Why should you choose us?
               </div>
                <div className="row">
                   {chooseList.map( list => (
                    <div className="col-lg-3 col-6" key={list.id}>
                        <Choose {...list}/>
                    </div>
                   ))}
                </div>
           </div>
        </div>
    )
}

export default ChooseList;
