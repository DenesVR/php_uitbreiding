import React from "react";
import { Link } from "react-router-dom";

function Btw({ btwcodes }) {
  return (
    <Link to={`/btw/${btwcodes.eub_id}`}>
      <ul>
        {btwcodes.map(btwcode => (
          <li key={btwcode.eub_id}>
            {btwcode.eub_id} - {btwcode.eub_land} - {btwcode.eub_code}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default Btw;
