import React from 'react';

const Scroll = (props) => {

  // Every props in React are passed by default children
  return (
    // Can return style with object within js expression
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
}

export default Scroll;