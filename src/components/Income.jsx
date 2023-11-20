// import React from 'react';

import { Helmet } from "react-helmet";
import Button from "./Button";
import IncomeForm from "./from/IncomeForm";
import { useEffect, useState } from "react";
import IncomeTable from "./table/IncomeTable";

const Income = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const name = "Income";


  useEffect(()=> {
    fetch("income.json")
    .then(res => res.json())
    .then(data => setIncomes(data));
  },[])


  return (
    <>
      <IncomeForm isOpen={isOpen} setIsOpen={setIsOpen} name={name}></IncomeForm>
      <Helmet>
        <title>Income - Chashee</title>
      </Helmet>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Button name={"Add Income"}></Button>
      </div>
      <div>
        <IncomeTable incomes={incomes}></IncomeTable>
      </div>
    </>
  );
};

export default Income;
