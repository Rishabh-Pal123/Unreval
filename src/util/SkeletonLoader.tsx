import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #e0e0e0;
  border-radius: 8px;
`;

const Shimmer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonLoader: React.FC<{ height: string; width?: string }> = ({
  height,
  width = "100%",
}) => (
  <SkeletonWrapper style={{ height, width }}>
    <Shimmer />
  </SkeletonWrapper>
);

export default SkeletonLoader;
