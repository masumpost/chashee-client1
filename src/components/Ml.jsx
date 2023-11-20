// import React from 'react';

import { Helmet } from "react-helmet";
import Button from "./Button";
import LoneFrom from "./from/LoneForm";
import { useEffect, useState } from "react";
import MlTable from "./table/MlTable";

const Ml = () => {
    let [isOpen, setIsOpen] = useState(false);
    const name = "Monthly Lone";
    const [mls, setMls] = useState([]);

    console.log(mls);

    useEffect(() => {
        fetch("lone.json")
          .then((res) => res.json())
          .then((data) => setMls(data));
      }, []);
  return (
    <>
    <LoneFrom isOpen={isOpen} setIsOpen={setIsOpen} name={name}></LoneFrom>
      <Helmet>
        <title>Ml - Chahee</title>
      </Helmet>
        <div onClick={()=> setIsOpen(!isOpen)}>
            <Button name={"Add Monthly Lone"}></Button>
        </div>
        <div>
            <MlTable mls={mls}></MlTable>
        </div>
    </>
  );
};

export default Ml;
