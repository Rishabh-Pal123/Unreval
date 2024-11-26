import React, { useState, lazy, Suspense } from "react";
import { RoomsData, Variants } from "../../types";
import { theme } from "../../theme";
import styled from "styled-components";

const VariantCard = lazy(() => import("../VariantCard.tsx/VariantCard"));

const RoomCardSummary = styled.div`
  background-color: #f9f9f9; /* Light background for contrast */
  border: 1px solid #ddd; /* Subtle border */
  border-radius: 8px; /* Rounded corners */
  padding: 16px; /* Spacing inside the card  /* Light shadow for depth */
  transition: transform 0.2s ease-in-out; /* Animation for hover effect */

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 12px; 
  }
`;

const RoomName = styled.h3`
  font-size: 20px; /* Larger font for the title */
  font-weight: bold; /* Bold title */
  color: #007bff; /* Blue color for visual appeal */
  margin-bottom: 8px; /* Space between title and details */

  @media (max-width: 768px) {
    font-size: 18px; /* Slightly smaller title font on mobile */
  }
`;

const RoomDetail = styled.p`
  font-size: 16px; /* Standard font size for details */
  color: #555; /* Muted text color */
  margin: 4px 0; /* Space between details */

  strong {
    color: #000; /* Bold text for labels */
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust detail text size */
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
    room_type_code,
    properties,
    variants,
  } = room;

  const initialVariantsCount = 2; // Number of variants to display initially
  const displayedVariants = showAllVariants
    ? variants
    : variants.slice(0, initialVariantsCount); // Conditionally show all or limited variants

  const handleToggleVariants = () => {
    setShowAllVariants((prev) => !prev);
  };

  return (
    <CardWrapper>
      {/* Room Summary */}
      <div>
    <RoomName>{name}</RoomName>
    <RoomDetail>
      <strong>Type:</strong> {room_type_code}
    </RoomDetail>
    <RoomDetail>
      <strong>Max Occupancy:</strong> {properties.room_capacity.max_occupancy}
    </RoomDetail>
    <RoomDetail>
      <strong>Bed Type:</strong> {properties.bed_type}
    </RoomDetail>
    <RoomDetail>
      <strong>Promotions:</strong> {properties.promotions.count}
    </RoomDetail>
  </div>


      {/* Variants */}
      {displayedVariants.map((item: Variants, index: number) => (
        <Suspense key={index} fallback={<div>Loading...</div>}>
          <VariantCard
            variant={item}
            room_images={properties?.room_images}
            video_url={properties?.video_url}
          />
        </Suspense>
      ))}

      {/* Show More/Less Button */}
      <ShowMoreButton onClick={handleToggleVariants}>
        {showAllVariants ? "Click to see less" : "Click to see more"}
      </ShowMoreButton>
    </CardWrapper>
  );
};

export default RoomCard;
