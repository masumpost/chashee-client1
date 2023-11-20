// import React from 'react';

import DpsRow from "./tableRow/DpsRow";

const DpsTable = ({ dps }) => {
  console.log(dps);
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
            {dps.map((dp) => (
              <DpsRow key={dp.id} dps={dp}></DpsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DpsTable;
