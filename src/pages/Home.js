import React from 'react';
import About from '../components/About';
import Categories from '../components/Categories';
import PromoSlider from '../components/PromoSlider';

const Home = () => {
  return (
    <div>
      <PromoSlider />
      <Categories />
      <About />
    </div>
  );
};

export default Home;
