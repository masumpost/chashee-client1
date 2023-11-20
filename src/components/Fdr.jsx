// import React from 'react';

import { Helmet } from "react-helmet";
import Button from "./Button";
import { useEffect, useState } from "react";
import DepositForm from "./from/depositForm";
import FdrTable from "./table/FdrTable";

const Fdr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fdr, setFdr] = useState([]);
  const name = "Fixed Deposit";

  //   console.log(fdr);

  useEffect(() => {
    fetch("deposit.json")
      .then((res) => res.json())
      .then((data) => setFdr(data));
  }, []);

  return (
    <>
      <DepositForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={name}
      ></DepositForm>
      <Helmet>
        <title>FDR - Chashee</title>
      </Helmet>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Button name={"Add Fixed Deposit"}></Button>
      </div>
      <div>
        <FdrTable fdr={fdr}></FdrTable>
      </div>
    </>
  );
};

export default Fdr;
