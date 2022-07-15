import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
  return (
    <div>
        <h2>Error 404</h2>
        <p>This page doesn't exist</p>
        <button><Link to='/'>Home</Link></button>
    </div>
  )
}

export default Error