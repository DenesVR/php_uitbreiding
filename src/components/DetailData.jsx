import React from "react";

function DetailData({ btw: [{ eub_land, eub_code }] }) {
  return (
    <div>
      <p>Land: {eub_land}</p>
      <p>Code: {eub_code}</p>
    </div>
  );
}

export default DetailData;