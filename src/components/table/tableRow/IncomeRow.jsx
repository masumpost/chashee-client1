// import React from 'react';
const IncomeRow = ({income}) => {
    const {date, income_name, amount} = income;
    console.log(income);
    return (
        <>
            <tr className="text-center">
              <td>{date}</td>
              <td>{income_name}</td>
              <td>{amount}</td>
              <th>
                <button className="btn btn-primary btn-xs">details</button>
              </th>
            </tr>
        </>
    );
};

export default IncomeRow;