import React from "react";

function Options({ update, total }) {
  return (
    <div>
      <button onClick={() => update("good")}>Good</button>
      <button onClick={() => update("neutral")}>Neutral</button>
      <button onClick={() => update("bad")}>Bad</button>
      {total > 0 && <button onClick={() => update("reset")}>Reset</button>}
    </div>
  );
}

export default Options;
