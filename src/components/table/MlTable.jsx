// import React from 'react';

import MlRow from "./tableRow/MlRow";


const MlTable = ({ mls}) => {
  console.log(mls);
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
            {mls.map((ml) => (
              <MlRow key={ml.id} ml={ml}></MlRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MlTable;
