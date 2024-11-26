import React, { useState } from "react";
import './RoomCard.css';
import VariantCard from "../VariantCard.tsx/VariantCard";
import { Variants } from "../../types";


interface RoomCardProps {
  room: {
    name: string;
    room_type_code: string;
    variants_count: number;
    images: string | null;
    properties: {
      room_capacity: { max_occupancy: number };
      bed_type: string;
      promotions: { count: number };
      room_images?: { display_name: string };
    };
    total_price: {
      discounted_price: number;
      currency: string;
    };
    variants: Variants[]
  };
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const [showVariants, setShowVariants] = useState(false);

  const handleCardClick = () => {
    setShowVariants(!showVariants);
  };

  const {
    name,
    room_type_code,
    variants_count,
    images,
    properties,
    total_price,
    variants,
  } = room;

  return (
    <div className="room-card">
      <div className="room-card-summary">
      {/* {variant?.video_url?.med ? (
                        <video
                            ref={videoRef}
                            src={variant.video_url?.med}
                            controls
                            autoPlay={visible}
                            muted
                            loop
                            className="media"
                        />
                    ) : variant?.images ? (
                        <img
                            src={variant.images || ""}
                            alt={variant.name}
                            className="media"
                            loading="lazy"
                        />
                    ) : null} */}
        {images && <img src={images} alt={`${name} image`} className="room-image" />}
        <h3>{name}</h3>
        <p>Type: {room_type_code}</p>
        <p>Max Occupancy: {properties.room_capacity.max_occupancy}</p>
        <p>Bed Type: {properties.bed_type}</p>
        <p>Promotions: {properties.promotions.count}</p>
        <p>
          Price: {total_price?.currency} {total_price?.discounted_price}
        </p>
        <button onClick={handleCardClick}>
          {showVariants ? "Click to see less" : 'Click to see more'}
        </button>
      </div>

      {showVariants && (
        variants.map((item:Variants)=>(
          <VariantCard variant={item}/>
        ))
      )}
    </div>
  );
};

export default RoomCard;
