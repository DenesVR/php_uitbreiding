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
        //console.log(Response.data.data.eub_id);
      })
      .catch(error => {});
  }, []);
  return <Btw btwcodes={btwcodes} />;
}

export default GetRequest;
