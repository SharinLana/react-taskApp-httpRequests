import React from "react";
import styled from "styled-components";

const Name = styled.h2`
  color: #89c4e1;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 10vh;
`;

const Approach = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const Header = () => {
  return (
    <>
      <Name>HTTP REQUEST (fetching and posting)</Name>
      <Approach>CLASSIC APPROACH</Approach>
    </>
  );
};

export default Header;
