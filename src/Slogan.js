import React from 'react';

export default function Slogan({ slogan, key }) {
  return (
    <li key={key} className='slogan'>
      {/* this component takes in a slogan as a prop. Render it out here however you like */}
      {
        slogan 
      }


    </li>
  );
}
