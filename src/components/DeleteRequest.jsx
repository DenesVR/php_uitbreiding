import React from "react";
import axios from "axios";

function DeleteRequest({ btw: [{ eub_id }] }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        window.location.href = "/home";
        //alert("Weer eentje minder!");
        axios
          .delete(
            `http://localhost:8081/php2oefeningen/oef2-2/api/btwcode/${eub_id}`
          )
          .then(res => console.log(res));
      }}
    >
      <button>Delete</button>
    </form>
  );
}

export default DeleteRequest;
