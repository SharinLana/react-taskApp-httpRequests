import styled from "styled-components";

export const Name = styled.h2`
  color: #89c4e1;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 10vh;

  @media all and (max-width: 500px) {
    margin: 6vh 0px 10px 0px;
    font-size: 22px;
    padding: 0px 15px;
  }

  @media all and (max-width: 350px) {
    font-size: 18px;
  }
`;

export const Comment = styled.p`
  color: #89c4e1;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 0;

  @media all and (max-width: 500px) {
    font-size: 20px;
    padding: 0px 15px;
  }

  @media all and (max-width: 350px) {
    font-size: 18px;
  }
`;

export const Approach = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin: 0;

  @media all and (max-width: 500px) {
    font-size: 20px;
    padding: 0px 15px;
  }

  @media all and (max-width: 350px) {
    font-size: 18px;
  }
`;
