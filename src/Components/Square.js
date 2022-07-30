import React from 'react';
import '../App.css';

function Square({val, chooseSquare}) {
    //val: 'X'/''/'O'
  return (
    <div className='square' onClick={chooseSquare}>
        {val}
    </div>
  )
}

export default Square