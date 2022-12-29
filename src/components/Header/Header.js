import React from "react";
import { Name, Comment, Approach } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Name>HTTP REQUEST</Name>
      <Comment>(fetching, posting, deleting)</Comment>
      <Approach>CUSTOM HOOK APPROACH</Approach>
    </>
  );
};

export default Header;
