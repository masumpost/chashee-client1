// import React from 'react';

import IncomeRow from "./tableRow/IncomeRow";

const IncomeTable = ({ incomes }) => {

  return (
    <div className="my-2 md:my-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Date</th>
              <th>Income Name</th>
              <th>Amount</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((income) => (
              <IncomeRow key={income.id} income={income}></IncomeRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeTable;
