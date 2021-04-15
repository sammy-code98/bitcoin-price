import React, { useState, useEffect } from "react";
import axios from "axios";

function History() {
  const [history, setHistory] = useState("Disclaimer loading...");
  useEffect(() => {
    const urlApi = `https://api.coindesk.com/v1/bpi/currentprice.json`;
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => {
        setHistory(data.disclaimer);
      });
  });
  const [mydate, setDate] = useState("Date loading....");

  useEffect(() => {
    const myApi = `https://api.coindesk.com/v1/bpi/currentprice.json`;
    fetch(myApi)
      .then((resp) => resp.json())
      .then((data) => {
        setDate(data.time.updated);
      });
  });

  return (
    <div>
      <h3 className="mt-2 text-muted">History</h3>
    

      <p className="lead">{history}</p>
      <p className="lead">Last Updated : {mydate}</p>
    </div>
  );
}

export default History;
