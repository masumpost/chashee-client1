// import React from 'react';
const MlRow = ({ml}) => {
    const {name, phone, loanAmount} = ml;
    console.log(ml);
    return (
        <>
            <tr className="text-center">
              <td>{name}</td>
              <td>{phone}</td>
              <td>{loanAmount}</td>
              <th>
                <button className="btn btn-primary btn-xs">details</button>
              </th>
            </tr>
        </>
    );
};

export default MlRow;