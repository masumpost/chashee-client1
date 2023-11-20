// import React from 'react';
const DpsRow = ({dps}) => {
    const {name, phone, depositAmount, validity} = dps;
    console.log(dps);
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

export default DpsRow;