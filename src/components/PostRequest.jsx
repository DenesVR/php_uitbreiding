import React, { useState } from "react";
import axios from "axios";

function PostRequest() {
  const [btwcodeValue, setBtwcodeValue] = useState({
    land: "",
    code: ""
  });
  return (
    <form
      className="post"
      onSubmit={e => {
        e.preventDefault();
        window.location.href = "/home";
        //alert("Weer eentje erbij!");
        axios
          .post(
            `http://localhost:8081/php2oefeningen/oef2-2/api/btwcodes`,
            btwcodeValue
          )
          .then(res => console.log(res));
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
      <br />
      <button className="add">Add</button>
    </form>
  );
}

export default PostRequest;
