import React, { useState, useEffect } from "react";
import axios from "axios";

function GetRequest() {
  const [btwcodes, SetBtwcodes] = useState([]);

  useEffect(() => {
    //GET REQUEST
    axios(`http://localhost:8081/php2oefeningen/oef2-2/api/btwcodes`)
      .then(Response => {
        SetBtwcodes(Response.data.data);
      })
      .catch(error => {});
  }, []);
  return (
    <ul>
      {btwcodes.map(btwcode => (
        <li key={btwcode.eub_id}>{btwcode.eub_land}</li>
      ))}
    </ul>
  );
}

export default GetRequest;
