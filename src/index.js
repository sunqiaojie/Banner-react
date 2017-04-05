import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner/Banner';


const IMAGE_DATA = [
  {
    src: require('./images/demo1.jpg'),
    alt: 'images-1'
  },
  {
    src: require('./images/demo2.jpg'),
    alt: 'images-2'
  },
  {
    src: require('./images/demo3.jpg'),
    alt: 'images-3'
  }
  ,
  {
    src: require('./images/demo4.jpg'),
    alt: 'images-4'
  },
  {
    src: require('./images/demo5.jpg'),
    alt: 'images-5'
  },
  {
    src: require('./images/demo6.jpg'),
    alt: 'images-6'
  },
  {
    src: require('./images/demo7.jpg'),
    alt: 'images-7'
  }

];
const divStyle = {
  position: 'absolute',
  width: '500px',
  height: '500px'
}
ReactDOM.render(
  <div style={divStyle}>
    <Banner  items={IMAGE_DATA} speed={1.2} delay={2.1} pause={true} autoplay={true} dots={true} arrows={true}/>
  </div>,
  document.getElementById('root')
);
