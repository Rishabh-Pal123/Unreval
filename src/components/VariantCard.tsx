import React, { useState } from "react";
import { Variants } from "../types";
import styled from "styled-components";
import { theme } from "../theme";

interface VariantCardProps {
  variant: Variants;
  room_images?: {
    id: string;
    key: string;
    count: number;
    image_urls: string[];
    display_name: string;
  }[];
  video_url?: any;
}

const Main = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  background-color: #d2e4f0;
  text-align: start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MediaWrapper = styled.div`
  flex: 1;
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
  }

  .media {
    width: 100%;  
    height: auto; 
    max-height: 380px; 
    border-radius: 8px; 

    @media (max-width: 768px) {
      max-height: 280px;
    }
  }
`;

const Content = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const VariantName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PricingSection = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 5px;
  .discounted-price {
    color: #28a745;
    font-size: 16px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .original-price {
    color: #007bff;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .promo {
    font-size: 16px;
    background-color:  ${({ theme }) => theme.colors.primary};
    padding: 0 5px;
    border-radius: 5px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  @media(max-width: 768px){
    justify-content: center;
  }
`;

const RoomDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 16px;

  li {
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const CancellationPolicy = styled.div`
  margin-bottom: 16px;

  h4 {
    font-size: 16px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const VariantCard: React.FC<VariantCardProps> = ({
  variant,
  room_images,
  video_url,
}) => {

  const [cancellation, setCancellation] = useState(false);
  const {
    name,
    total_price,
    display_properties,
    cancellation_timeline,
  } = variant;

  const handleCancellation =()=>{
    setCancellation(!cancellation);
  }

  return (
    <Main>
      <MediaWrapper>
        {video_url?.med ? (
          <video
            src={video_url?.med}
            controls
            muted
            loop
            className="media"
          />
        ) : room_images ? (
          <img
            src={room_images[0].image_urls[0] || ""}
            alt={variant.name}
            className="media"
            loading="lazy"
          />
        ) : null}
      </MediaWrapper>
      <Content>
        {/* Variant Name */}
        <VariantName>{name}</VariantName>

        {/* Pricing Section */}
        <PricingSection>
          <p className="discounted-price">
            <strong>
              {total_price.discounted_price.toFixed(2)} {total_price.currency}
            </strong>
          </p>
          {total_price.total_price > total_price.discounted_price && (
            <p className="original-price">
              <s>
                {total_price.total_price.toFixed(2)} {total_price.currency}
              </s>
            </p>
          )}
          {total_price.promo_list.length > 0 && (
            <p className="promo">
              {total_price.promo_list[0].offer_title}
            </p>
          )}
        </PricingSection>

        {/* Display Properties */}
        <RoomDetails>
          {display_properties.map((property) => (
            <li key={property.name}>
              <span>{property.display_name}: </span>
              <span>{property.value}</span>
            </li>
          ))}
        </RoomDetails>

        {/* Cancellation Policy */}
        <CancellationPolicy>
          <h4 onClick={handleCancellation} style={{cursor: 'pointer', color: `${theme.colors.primary}`}}>{"Cancellation Policy >"} </h4>
          {cancellation && cancellation_timeline.cancellation_rules.map((rule, index) => (
            <p key={index}>
              <strong>{rule.title}</strong> - {rule.sub_title}
            </p>
          ))}
        </CancellationPolicy>
      </Content>
    </Main>
  );
};

export default VariantCard;
