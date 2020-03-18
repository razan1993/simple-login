import React from 'react';

function XO({ index, myId, myFunction }) {
  return (
    <div
      className="col border-r border"
      id={myId}
      onClick={() => myFunction(index)}
    ></div>
  );
}

export default XO;
