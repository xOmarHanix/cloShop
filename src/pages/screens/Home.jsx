import React from 'react';
import Helmet from '../../common/helmet/Helmet';
import AboutUs from '../../components/aboutUs/AboutUs';
import BasicPieces from '../../components/basicPieces/BasicPieces';
import BestSeller from '../../components/bestSeller/BestSeller';
import Collections from '../../components/collections/Collections';
import OnFashion from '../../components/onFashion/OnFashion';
import Services from '../../components/services/Services';
import Testimonials from '../../components/testimonials/Testimonials';
import Header from '../../common/header/Header';
import HeroTwo from '../../components/heroTwo/HeroTwo';

function Home() {
  return (
    <Helmet title='Home'>
        <Header />
        {/* <Hero /> */}
        <HeroTwo />
        <AboutUs />
        <Services />
        <OnFashion />
        <Collections />
        <BestSeller />
        <Testimonials />
        <BasicPieces />
    </Helmet>
  )
}

export default Home