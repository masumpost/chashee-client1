// import React from 'react';

import { Helmet } from "react-helmet";
import Button from "./Button";
import { useEffect, useState } from "react";
import DepositForm from "./from/depositForm";
import DpsTable from "./table/DpsTable";

const Dps = () => {
    const name = "DPS"
    const [isOpen, setIsOpen] = useState(false);
    const [dps, setDps] = useState([]);

    console.log(dps);

    useEffect(() => {
        fetch("deposit.json")
          .then((res) => res.json())
          .then((data) => setDps(data));
      }, []);

  return (
   <>
    <DepositForm isOpen={isOpen} setIsOpen={setIsOpen} name={name}></DepositForm>
      <Helmet>
        <title>DPS - Chashee</title>
      </Helmet>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Button name={"Add a DPS"}></Button>
      </div>
      <div>
        <DpsTable dps={dps}></DpsTable>
      </div>
    </>
  );
};

export default Dps;
