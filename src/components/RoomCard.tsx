import React, { useState, useMemo, lazy, Suspense, useEffect } from "react";
import styled from "styled-components";
import SkeletonCard from "../util/SkeletonCard";
import { Variants } from "../types";

const VariantCard = lazy(() => import("./VariantCard"));

const RoomName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 100px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.blue};
`;

const ShowMoreButton = styled.span`
  cursor: pointer;
  color: blue;
  display: block;
  text-align: center;
  margin-top: 16px;
`;

interface RoomCardProps {
  room: any;
}

const RoomCard: React.FC<RoomCardProps> = React.memo(({ room }) => {
  const [showAllVariants, setShowAllVariants] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { name, properties, variants } = room;
  const initialVariantsCount = 2;

  const displayedVariants = useMemo(() => {
    return showAllVariants ? variants : variants.slice(0, initialVariantsCount);
  }, [showAllVariants, variants]);

  const handleToggleVariants = () => {
    setShowAllVariants((prev) => !prev);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500); // Simulate loading delay
    return () => clearTimeout(timeout);
  }, [variants]);

  return (
    <CardWrapper>
      <RoomName>{name}</RoomName>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        displayedVariants.map((item:Variants, index: number) => (
          <Suspense key={index} fallback={<SkeletonCard />}>
            <VariantCard
              variant={item}
              room_images={properties?.room_images}
              video_url={properties?.video_url}
            />
          </Suspense>
        ))
      )}
      {variants.length > initialVariantsCount && (
        <ShowMoreButton onClick={handleToggleVariants}>
          {showAllVariants ? "Show Less" : "Show More"}
        </ShowMoreButton>
      )}
    </CardWrapper>
  );
});

export default RoomCard;
