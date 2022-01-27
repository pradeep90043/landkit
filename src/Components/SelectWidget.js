import React from 'react';

function SelectWidget(props) {
  return <div>
      <p className='widgets' >{props.color||props.size }</p>
  </div>;
}

export default SelectWidget;
