import React from "react";
import { Navigate } from "react-router-dom";

const redirectHome = () => {
  return <Navigate replace={true} to="/" />;
};

export default redirectHome;
