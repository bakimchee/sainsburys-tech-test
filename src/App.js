import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";

const fetchURL = "https://jsainsburyplc.github.io/front-end-test/products.json";

function App({ name }) {
  const [data, setData] = useState(null);
  const getData = () => fetch(fetchURL).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <>
      {data?.map((item) => (
        <ul>
          <li>{JSON.stringify(item)}</li>
        </ul>
      ))}
    </>
  );
}

export default hot(App);
