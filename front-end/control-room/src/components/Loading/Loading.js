import React from 'react';
import './Loading.css';
function Loading() {
  return (
    <div className='wrapper'>
      <div className='loader'>
        <div className='loader__bar'></div>
        <div className='loader__bar'></div>
        <div className='loader__bar'></div>
        <div className='loader__bar'></div>
        <div className='loader__bar'></div>
        <div className='loader__ball'></div>
      </div>
    </div>
  );
}

export default Loading;
