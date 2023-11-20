// import React from "react";

import Tr from "./Tr";

const Table = ({members}) => {

    // console.log(members);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Accounts</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {
                members.map((member) => <Tr key={member.id} member={member}></Tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
