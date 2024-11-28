import React, { useEffect, useRef, useState } from "react";
import { Variants } from "../types";
import styled from "styled-components";
import { theme } from "../theme";
import SkeletonLoader from "../util/SkeletonLoader";

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
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const MediaWrapper = styled.div`
  flex: 1;
  margin-right: 16px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
  }

  .media {
    width: 100%;
    height: auto;
    max-height: 380px;
    border-radius: 8px;
    object-fit: cover;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      max-height: 280px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .media-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    @media (max-width: 768px) {
      display: none;
    }

    &:hover {
      opacity: 1;
    }

    .play-button {
      font-size: 40px;
      color: #fff;
      cursor: pointer;
    }
  }
`;

const Content = styled.div`
  flex: 1;

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
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 0 5px;
    border-radius: 5px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
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
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};

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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const { name, display_properties, total_price, cancellation_timeline } =
    variant;
  const [mediaLoading, setMediaLoading] = useState(true);

  const handleCancellationToggle = () => setCancellation((prev) => !prev);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVideoVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoVisible]);

  return (
    <Main>
      <MediaWrapper>
        {mediaLoading && <SkeletonLoader height="100%" />}
        {video_url?.med ? (
          <video
            ref={videoRef}
            src={video_url?.med}
            muted
            loop
            className="media"
            onLoadedData={() => setMediaLoading(false)}
            style={{ display: mediaLoading ? "none" : "block" }}
          />
        ) : room_images ? (
          <img
            src={room_images[0].image_urls[0]}
            srcSet={`
              ${room_images[0]?.image_urls[0]} 480w,
              ${room_images[0]?.image_urls[1]} 768w,
              ${room_images[0]?.image_urls[2]} 1200w
            `}
            sizes="(max-width: 480px) 480px, 
                   (max-width: 768px) 768px, 
                   1200px"
            alt={variant.name}
            className="media"
            loading="lazy"
            onLoad={() => setMediaLoading(false)}
            style={{ display: mediaLoading ? "none" : "block" }}
          />
        ) : null}
        {video_url?.med && !mediaLoading && (
          <div className="media-overlay">
            <div className="play-button">▶</div>
          </div>
        )}
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
            <p className="promo">{total_price.promo_list[0].offer_title}</p>
          )}
        </PricingSection>

        {/* Display Properties */}
        <RoomDetails>
          {display_properties.map((property) => (
            <li key={property.name}>
              <strong>{property.display_name}: </strong>
              <span>{property.value}</span>
            </li>
          ))}
        </RoomDetails>
        <CancellationPolicy>
          <h4 onClick={handleCancellationToggle}>
            {"Cancellation Policy >"}
          </h4>
          {cancellation &&
            cancellation_timeline.cancellation_rules.map((rule, index) => (
              <p key={index}>
                <strong>{rule.title}</strong> - {rule.sub_title}
              </p>
            ))}
        </CancellationPolicy>
        <div>
          <button
            style={{
              backgroundColor: `${theme.colors.primary}`,
              padding: "10px 20px",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Select
          </button>
        </div>
      </Content>
    </Main>
  );
};

export default VariantCard;
