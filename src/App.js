import React from 'react';
import dog1 from '../public/img/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg';
import dog2 from '../public/img/marliese-streefland-2l0CWTpcChI-unsplash.jpg';
import dog3 from '../public/img/oscar-sutton-yihlaRCCvd4-unsplash.jpg';

function App() {
  return (
    <div>
      <h2>
        <b>Welcome to my React App!</b>
      </h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <img src={dog1} width={300} height={300} />
      <img src={dog2} width={300} height={300} />
      <img src={dog3} width={300} height={300} />
    </div>
  );
}

export default App;
