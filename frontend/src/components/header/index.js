import React from "react";
import { useSelector } from "react-redux";
import Authorized from "./Authorized";
import Guest from "./Guest";
export default () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
    {
      isAuthenticated ?
      <Authorized />
      :
      <Guest />
    }
    </>
  );
};
