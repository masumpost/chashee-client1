// import React from 'react';
const FdrRow = ({fdr}) => {
    const {name, phone, depositAmount, validity} = fdr;
    console.log(fdr);
    return (
        <>
            <tr className="text-center">
              <td>{name}</td>
              <td>{phone}</td>
              <td>{depositAmount}</td>
              <td>{validity}</td>
              <th>
                <button className="btn btn-primary btn-xs">details</button>
              </th>
            </tr>
        </>
    );
};

export default FdrRow;