// import React from 'react';

import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Chashee</title>
      </Helmet>
      <Navbar></Navbar>
      <Footer></Footer>
    </>
  );
};

export default Home;
