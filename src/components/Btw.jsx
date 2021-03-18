import React from "react";
import { Link } from "react-router-dom";

function Btw({ btwcodes }) {
  return (
    <ul>
      {btwcodes.map(btwcode => (
        <Link to={`/btw/${btwcode.eub_id}`}>
          <li key={btwcode.eub_id}>
            {btwcode.eub_id} - {btwcode.eub_land} - {btwcode.eub_code}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Btw;
