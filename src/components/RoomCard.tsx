import React, { useState, useMemo, lazy, Suspense } from "react";
import { RoomsData, Variants } from "../types";
import styled from "styled-components";

const VariantCard = lazy(() => import("./VariantCard"));

const RoomName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #007bff; 
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

const ShowMoreButton = styled.span`
  cursor: pointer;
  color: blue;
  display: block;
  text-align: center;
  margin-top: 16px;
`;

interface RoomCardProps {
  room: RoomsData;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const [showAllVariants, setShowAllVariants] = useState(false);

  const {
    name,
    properties,
    variants,
  } = room;

  const initialVariantsCount = 2;

  // Memoize displayed variants to avoid recalculating on every render
  const displayedVariants = useMemo(() => {
    return showAllVariants ? variants : variants.slice(0, initialVariantsCount);
  }, [showAllVariants, variants]);

  const handleToggleVariants = () => {
    setShowAllVariants((prev) => !prev);
  };

  return (
    <CardWrapper>
      <div>
        <RoomName>{name}</RoomName>
      </div>

      {displayedVariants.map((item: Variants, index: number) => (
        <Suspense key={index} fallback={<div>Loading...</div>}>
          <VariantCard
            variant={item}
            room_images={properties?.room_images}
            video_url={properties?.video_url}
          />
        </Suspense>
      ))}

      <ShowMoreButton onClick={handleToggleVariants}>
        {showAllVariants ? "Click to see less" : "Click to see more"}
      </ShowMoreButton>
    </CardWrapper>
  );
};

export default RoomCard;
