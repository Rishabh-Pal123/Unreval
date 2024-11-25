import React from "react";
import styled, { keyframes } from "styled-components";

// Skeleton animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Styled components
const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SkeletonElement = styled.div`
  background: #e0e0e0;
  background: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f0f0f0 50%,
    #e0e0e0 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`;

const SkeletonImage = styled(SkeletonElement)`
  width: 100%;
  height: 180px;
  margin-bottom: 16px;
`;

interface SkeletonTextProps {
  width: string;
}

const SkeletonText = styled(SkeletonElement)<SkeletonTextProps>`
  width: ${({ width }) => width};
  height: 16px;
  margin-bottom: 8px;
`;

// SkeletonCard Component
const SkeletonCard: React.FC = () => {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
      <SkeletonText width="80%" />
      <SkeletonText width="60%" />
      <SkeletonText width="90%" />
    </SkeletonWrapper>
  );
};

export default SkeletonCard;
