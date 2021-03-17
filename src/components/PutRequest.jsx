import React, { useState } from "react";
import axios from "axios";

function PutRequest({ btw: [{ eub_id, eub_land, eub_code }] }) {
  const [btwcodeValue, setBtwcodeValue] = useState({
    land: eub_land,
    code: eub_code
  });
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        window.location.reload(true);
        axios
          .put(
            `http://localhost:8081/php2oefeningen/oef2-2/api/btwcode/${eub_id}`,
            btwcodeValue
          )
          .then(res => console.log(res));
      }}
    >
      <input
        type="text"
        value={btwcodeValue.land}
        onChange={e => {
          setBtwcodeValue({ ...btwcodeValue, land: e.target.value });
        }}
      />
      <input
        type="text"
        value={btwcodeValue.code}
        onChange={e => {
          setBtwcodeValue({ ...btwcodeValue, code: e.target.value });
        }}
      />
      <button>Change</button>
    </form>
  );
}

export default PutRequest;
