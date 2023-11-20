// import React from 'react';
const ExpenseRow = ({expense}) => {
    const {expense_name, date, amount} = expense;
    console.log(expense);
    return (
        <>
            <tr className="text-center">
              <td>{expense_name}</td>
              <td>{date}</td>
              <td>{amount}</td>
              <th>
                <button className="btn btn-primary btn-xs">details</button>
              </th>
            </tr>
        </>
    );
};

export default ExpenseRow;