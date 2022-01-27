import React from 'react';

function SelectWidget(props) {
    const color = props.background
  return <div>
      <p className='widgets' onClick={props.setBackground(props.background)} style={{backgroundColor:{color}}} >{props.color||props.size }  </p>
  </div>;
}

export default SelectWidget;
