import React, { useState } from "react";
import axios from "axios";

function PostRequest() {
  const [btwcodeValue, setBtwcodeValue] = useState({
    land: "",
    code: ""
  });
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        axios
          .post(
            `http://localhost:8081/php2oefeningen/oef2-2/api/btwcodes`,
            btwcodeValue
          )
          .then(Response => console.log(Response));
      }}
    >
      <input
        type="text"
        value={btwcodeValue.land}
        placeholder="land"
        onChange={e => {
          setBtwcodeValue({ ...btwcodeValue, land: e.target.value });
        }}
      />
      <input
        type="text"
        value={btwcodeValue.code}
        placeholder="code"
        onChange={e => {
          setBtwcodeValue({ ...btwcodeValue, code: e.target.value });
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default PostRequest;
