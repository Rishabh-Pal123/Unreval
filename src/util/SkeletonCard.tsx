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

const Main = styled.div`
  padding: 10px 0px;
  width: 100%;
`

// Styled components
const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 20px 20px;
  margin: 50px 0px;
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
  flex: 1;
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
  padding: 15px 15px;
`;

const TextSection = styled.div`
 flex:1;
 padding: 10px 10px;
`

interface SkeletonTextProps {
  width: string;
}

const SkeletonText = styled(SkeletonElement)<SkeletonTextProps>`
  width: ${({ width }) => width};
  height: 16px;
  margin-bottom: 20px;
`;

// SkeletonCard Component
const SkeletonCard: React.FC = () => {
  return (
      <Main>
    <SkeletonWrapper>
      <SkeletonImage />
      <TextSection>
      <SkeletonText width="80%" />
      <SkeletonText width="60%" />
      <SkeletonText width="90%" />
      <SkeletonText width="70%" />
      <SkeletonText width="50%" />
      </TextSection>
    </SkeletonWrapper>
      </Main>
  );
};

export default SkeletonCard;
