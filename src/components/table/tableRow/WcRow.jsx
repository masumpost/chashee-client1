// import React from 'react';
const WcRow = ({wcs}) => {
    const {name, phone, depositAmount, validity} = wcs;
    console.log(wcs);
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

export default WcRow;