// import React from 'react';
import { useEffect, useState } from "react";
import Button from "./Button";
import { Helmet } from "react-helmet";
import DepositForm from "./from/depositForm";
import WcTable from "./table/WcTable";

const WeeklyAc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const name = "Weekly Ac";
  const [wcs, setWcs] = useState([]);

  useEffect(() => {
    fetch("deposit.json")
      .then((res) => res.json())
      .then((data) => setWcs(data));
  }, []);

  return (
    <>
      <DepositForm isOpen={isOpen} setIsOpen={setIsOpen} name={name}></DepositForm>
      <Helmet>
        <title>WC - Chashee</title>
      </Helmet>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Button name={"Add Weekly Ac"}></Button>
      </div>
      <div>
        <WcTable wcs={wcs}></WcTable>
      </div>
    </>
  );
};

export default WeeklyAc;
