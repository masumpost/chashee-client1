// import React from 'react';

import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

// import Memberlist from "./Memberlist";
import Table from "./Table";
import MemberForm from "./from/MemberForm";

const Member = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const name = "Member"

  useEffect(() => {
    fetch("member.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  // console.log(members);

  return (
    <>
      <Helmet>
        <title>Member - Chashee</title>
      </Helmet>
      <MemberForm isOpen={isOpen} setIsOpen={setIsOpen} name={name}></MemberForm>
      <div>
        <div className="py-5 text-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-primary btn-sm"
          >
            Add a member
          </button>
        </div>
      </div>
      <div className="">
        <Table members={members}></Table>
      </div>
    </>
  );
};

export default Member;
