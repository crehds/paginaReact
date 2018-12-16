import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';

function Related(props) {
  return (
    <div className="Related">
      {console.log(props.related)}
      <img src={props.related.logo} width={250}/>
    </div>
  );
}

export default Related;
