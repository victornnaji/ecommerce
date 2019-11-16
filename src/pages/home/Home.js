import React from 'react';
import Hero from './hero/Hero';
import BannerList from './Banner/BannerList';
import Preview from '../Preview/Preview';


const Home = () => {
    return (
        <div >
           <Hero />
           <BannerList />
           <Preview />
        </div>
    )
}

export default Home;
