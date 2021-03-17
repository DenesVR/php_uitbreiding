import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailData from "./DetailData";
import PutRequest from "./PutRequest";
import DeleteRequest from "./DeleteRequest";

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios(`http://localhost:8081/php2oefeningen/oef2-2/api/btwcode/${id}`)
      .then(Response => {
        setData(Response.data.data);
      })
      .catch(error => {});
  }, [id]);
  return (
    <div>
      <h1>Detail</h1>
      {data && <DetailData btw={data} />}
      {data && <PutRequest btw={data} />}
      {data && <DeleteRequest btw={data} />}
    </div>
  );
}

export default DetailPage;
