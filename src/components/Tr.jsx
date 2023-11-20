// import React from 'react';

const Tr = ({member}) => {
    const {name, address, phone, account} = member;
    console.log(member);
    return (
        <>
            <tr className="text-center">
              <td>{name}</td>
              <td>{address}</td>
              <td>{phone}</td>
              <td>{account}</td>
              <th>
                <button className="btn btn-primary btn-xs">details</button>
              </th>
            </tr>
        </>
    );
};

export default Tr;