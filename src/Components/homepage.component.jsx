import React from 'react';

import '../Styles/homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Farm Produce</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>   
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Condiments</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Bread/Grain</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Meat/Protein</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Dairy</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;