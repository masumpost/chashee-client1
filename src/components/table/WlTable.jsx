// import React from 'react';

import WlRow from "./tableRow/WlRow";

const WlTable = ({ wls }) => {
  console.log(wls);
  return (
    <div className="my-2 md:my-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Phone</th>
              <th>L. Amount</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {wls.map((wl) => (
              <WlRow key={wl.id} wls={wl}></WlRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WlTable;
