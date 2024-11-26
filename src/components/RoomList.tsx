import React, { useState } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import SkeletonCard from "./SkeletonCard";
import RoomCard from "./RoomCard/RoomCard";
import data from "../data.json";
import { RoomDataList } from "../types";

const RoomList: React.FC = () => {
  const roomData = data as RoomDataList | any;

  const [rooms, setRooms] = useState<any[]>(
    roomData?.rooms_by_serial_no[0].rooms.slice(0, 10)
  );

  const { isLoading } = useInfiniteScroll(() => {
    setRooms((prev) => [
      ...prev,
      ...roomData?.rooms_by_serial_no[0].rooms.slice(
        prev.length,
        prev.length + 10
      )
    ]);
  });

  return (
    <div className="room-list" >
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
      {isLoading && <SkeletonCard />}
    </div>
  );
};

export default RoomList;
