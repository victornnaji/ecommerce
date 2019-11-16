import React from 'react';
import Hero from './hero/Hero';
import BannerList from './Banner/BannerList';
import Preview from '../Preview/Preview';
import ChooseList from './Choose/ChooseList';
import Selected from '../../Components/Selected/Selected';


const Home = () => {
    return (
        <div >
           <Hero />
           <BannerList />
           <Preview />
           <ChooseList />
           <Selected />
        </div>
    )
}

export default Home;
