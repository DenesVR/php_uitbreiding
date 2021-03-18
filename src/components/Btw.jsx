import React from "react";
import { Link } from "react-router-dom";

function Btw({ btwcodes }) {
  return (
    <Link to={`/btw/${btwcodes.eub_id}`}>
      {/* <p>
        <pre>{JSON.stringify(btwcodes)}</pre>
      </p> */}
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
