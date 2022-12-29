import React from "react";
import { Name, Comment, Approach } from './Header.styled';

const Header = () => {
  return (
    <>
      <Name>HTTP REQUEST</Name>
      <Comment>(fetching and posting user entered data)</Comment>
      <Approach>CLASSIC APPROACH</Approach>
    </>
  );
};

export default Header;
