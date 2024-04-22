'use client'

import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '20rem',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const UICarousel: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default UICarousel;