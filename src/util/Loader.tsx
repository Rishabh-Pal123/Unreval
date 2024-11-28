import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px; // Adjust the height as needed
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #000000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.1s linear infinite;
`;

const Loader: React.FC = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);

export default Loader;
