import React from "react";
import { Name, Comment, Approach } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Name>HTTP REQUEST</Name>
      <Comment>(fetching, posting and deleting user entered data)</Comment>
      <Approach>CLASSIC APPROACH</Approach>
    </>
  );
};

export default Header;
