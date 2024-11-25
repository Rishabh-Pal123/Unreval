import React, { useRef } from 'react';
import { useLazyMedia } from '../hooks/useLazyMedia';
import { RoomDetails } from '../types';

const RoomCard = ({ room }: { room: RoomDetails }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { visible } = useLazyMedia(videoRef);

  return (
    <div className="room-card">
      {room.properties && room.properties?.video_url ? (
        <video
          ref={videoRef}
          src={room.properties.video_url.med}
          controls
          autoPlay={visible}
          muted
          loop
          className="media"
        />
      ) : room.properties && room.properties?.room_images?.image_urls ? (
        <img
          src={room.properties?.room_images?.image_urls[0]}
          alt={room.name}
          className="media"
          loading="lazy"
        />
      ) : null}
      <div className="room-info">
        <h3>{room.name}</h3>
        {/* <p>{room.description}</p> */}
        {/* <span>₹{room.price}</span> */}
      </div>
    </div>
  );
};

export default React.memo(RoomCard);
