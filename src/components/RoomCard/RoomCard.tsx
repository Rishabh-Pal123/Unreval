import React, { useState } from "react";
import './RoomCard.css';


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
    variants: {
      variant_code: string;
      variant_id: string;
      name: string;
      properties: {
        price: { text: string; value: number; unit: string }[];
        star_rating: number;
        sub_heading: string | null;
        dist_from_centre: { text: string };
      };
      cancellation_info: {
        free_cancellation: number;
        cancellation_rules: { date_info: string; description: string; cost: number | null }[];
      };
      total_price: {
        total_price: number;
        discounted_price: number;
        currency: string;
      };
    }[];
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
          {showVariants ? "Hide Details" : `View ${variants_count} Variants`}
        </button>
      </div>

      {showVariants && (
        <div className="room-variants">
          <h4>Variants</h4>
          {variants.map((variant) => (
            <div key={variant.variant_id} className="variant-details">
              <h5>{variant.name}</h5>
              <p>Code: {variant.variant_code}</p>
              <p>Price: {variant.total_price.currency} {variant.total_price.discounted_price}</p>
              <p>Star Rating: {variant.properties.star_rating}</p>
              <p>Distance from Centre: {variant?.properties?.dist_from_centre?.text}</p>
              <p>Free Cancellation: {variant.cancellation_info.free_cancellation ? "Yes" : "No"}</p>
              {variant.cancellation_info.cancellation_rules.map((rule, index) => (
                <div key={index}>
                  <p>Rule: {rule.date_info} - {rule.description}</p>
                  <p>Cost: {rule.cost ? `${variant.total_price.currency} ${rule.cost}` : "No Charge"}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomCard;
