// import React from 'react';

const Button = ({name}) => {
  return (
    <>
      <div className="text-center">
        <button className="btn btn-primary px-3 md:px-4 m-5 rounded-2xl">
         {name}
        </button>
      </div>
    </>
  );
};

export default Button;
