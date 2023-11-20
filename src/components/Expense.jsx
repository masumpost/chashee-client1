// import React from 'react';

import { Helmet } from "react-helmet";
import Button from "./Button";
import { useEffect, useState } from "react";
import ExpanseForm from "./from/ExpenseForm";
import ExpenseTable from "./table/ExpenseTable";

const Expense = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const name = "Expense";

    console.log(expenses)

    useEffect(()=> {
        fetch("expense.json")
        .then(res => res.json())
        .then(data => setExpenses(data));
    },[])
  return (
    <>
    <ExpanseForm isOpen={isOpen} setIsOpen={setIsOpen} name={name}></ExpanseForm>
      <Helmet>
        <title>Expense - Chashee</title>
      </Helmet>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Button name={"Add Expense"}></Button>
      </div>
      <div>
        <ExpenseTable expenses={expenses}></ExpenseTable>
      </div>
    </>
  );
};

export default Expense;
