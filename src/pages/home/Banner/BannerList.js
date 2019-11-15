import React, { useState } from 'react';
import Banner from './Banner';
import "./Banner.scss";

const BannerList = () => {
    const section =  [
        {
            title: 'New arrivals are now in!',
            imageUrl: "images/new_arrival.png",
            id: 1,
            width: "33rem",
            button: "Show collection"
        },

        {
            title: 'Basic t-shirts $29,99',
            imageUrl: "images/beach_tshirt.png",
            id: 2,
            width: "22rem",
            button: "More Details"
        },

        {
            title: 'Sale this summer',
            imageUrl: "images/sale_summer.png",
            id: 3,
            width: "22rem",
            button: "View All",
            discount:"-50%"
        }

    ];
    const [state] = useState(section);

    return (
        <div className="container">
            <div  className="bannerlist-container">
                {state.map( item => (
                    <Banner key={item.id} image={item.imageUrl} width={item.width}
                    title={item.title} buttontext={item.button} discount={item.discount}
                    />
                ))}
            </div>
        </div>
    )
}

export default BannerList;
