// import React from 'react';

import FdrRow from "./tableRow/FdrRow";

const FdrTable = ({ fdr }) => {

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
            {fdr.map((fd) => (
              <FdrRow key={fd.id} fdr={fd}></FdrRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FdrTable;
