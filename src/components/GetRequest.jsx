import React, { useState, useEffect } from "react";
import axios from "axios";
import Btw from "./Btw";

function GetRequest() {
  const [btwcodes, SetBtwcodes] = useState([]);

  useEffect(() => {
    //GET REQUEST
    axios(`http://localhost:8081/php2oefeningen/oef2-2/api/btwcodes`)
      .then(Response => {
        SetBtwcodes(Response.data.data);
        //console.log(btwcodes);
      })
      .catch(error => {});
  }, []);
  return (
    // <Link to={`/btw/${btwcodes.eub_id}`}>
    //   <ul>
    //     {btwcodes.map(btwcode => (
    //       <li key={btwcode.eub_id}>{btwcode.eub_land}</li>
    //     ))}
    //   </ul>
    // </Link>
    <Btw btwcodes={btwcodes} />
  );
}

export default GetRequest;
