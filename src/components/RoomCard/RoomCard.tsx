import React, { useState, lazy, Suspense } from "react";
import { RoomsData, Variants } from "../../types";
import styled from "styled-components";

const VariantCard = lazy(() => import("../VariantCard.tsx/VariantCard"));

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
      <div style={{ marginBottom: "16px" }} className="room-card-summary">
        <h3>{name}</h3>
        <p>Type: {room_type_code}</p>
        <p>Max Occupancy: {properties.room_capacity.max_occupancy}</p>
        <p>Bed Type: {properties.bed_type}</p>
        <p>Promotions: {properties.promotions.count}</p>
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
