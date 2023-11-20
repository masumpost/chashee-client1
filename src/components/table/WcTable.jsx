// import React from 'react';

import WcRow from "./tableRow/WcRow";

const WcTable = ({ wcs }) => {
  console.log(wcs);
  return (
    <div className="my-2 md:my-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Phone</th>
              <th>Amount</th>
              <th>Validity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {wcs.map((wc) => (
              <WcRow key={wc.id} wcs={wc}></WcRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WcTable;
