'use client'

import React from 'react';
import { Carousel } from 'antd';
import Link from 'next/link';

const contentStyle: React.CSSProperties = {
  height: '15rem',
  color: '#fff',
  lineHeight: '200px',
  textAlign: 'center',
};

const UICarousel: React.FC = () => (
  <Carousel autoplay dots={true}>
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
    <div>
      <h3 style={contentStyle}>5</h3>
    </div>
    <div>
      <h3 style={contentStyle}>6</h3>
    </div>
    <div>
      <h3 style={contentStyle}>7</h3>
    </div>
    <div>
      <h3 style={contentStyle}>8</h3>
    </div>
    <div>
      <h3 style={contentStyle}>9</h3>
    </div>
    <div>
      <h3 style={contentStyle}>10</h3>
    </div>
  </Carousel>
);

export default UICarousel;