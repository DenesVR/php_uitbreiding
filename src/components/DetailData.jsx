import React from "react";

function DetailData({ btw: [{ eub_id, eub_land, eub_code }] }) {
  return (
    <div className="detail">
      <p>ID: {eub_id}</p>
      <p>Land: {eub_land}</p>
      <p>Code: {eub_code}</p>
    </div>
  );
}

export default DetailData;
