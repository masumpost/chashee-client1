// import React from 'react';
const WlRow = ({wls}) => {
    const {name, phone, loanAmount} = wls;
    console.log(wls);
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

export default WlRow;