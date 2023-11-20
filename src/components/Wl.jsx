// import React from 'react';

import { Helmet } from "react-helmet";
import Button from "./Button";
import { useEffect, useState } from "react";
import LoneFrom from "./from/LoneForm";
import WlTable from "./table/WlTable";

const Wl = () => {
  let [isOpen, setIsOpen] = useState(false);
  const name = "Weekly Lone";

  const [wls, setWls] = useState([]);

  console.log(wls);

  useEffect(() => {
      fetch("lone.json")
        .then((res) => res.json())
        .then((data) => setWls(data));
    }, []);

  return (
    <>
    <LoneFrom isOpen={isOpen} setIsOpen={setIsOpen} name={name}></LoneFrom>
      <Helmet>
        <title>WL - Chashee</title>
      </Helmet>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Button name={"Add Weekly Lone"}></Button>
      </div>
      <div>
        <WlTable wls={wls}></WlTable>
      </div>
    </>
  );
};

export default Wl;
