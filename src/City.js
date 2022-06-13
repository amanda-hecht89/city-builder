import React from 'react';

export default function City({ waterfrontID, skylineId, castleId }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId use these 3 ids in img tags load approriate images that live in the public directory */}
      <img src={`${castleId}.jpeg`} />
      <img src={`${waterfrontID}.jpeg`}/>
      <img src={`${skylineId}.jpeg`}/>
    </div>
  );
}
