// import React from 'react';

import ExpenseRow from "./tableRow/ExpenseRow";

const ExpenseTable = ({ expenses }) => {
  console.log(expenses);
  return (
    <>
      <div className="my-2 md:my-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>Expense Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Detais</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <ExpenseRow key={expense.id} expense={expense}></ExpenseRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ExpenseTable;
