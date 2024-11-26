import React, { useState } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import SkeletonCard from "./SkeletonCard";
import RoomCard from "./RoomCard";
import data from "../data.json";
import { RoomDataList } from "../types";

const RoomList: React.FC = () => {
  const roomData = data as RoomDataList | any;
  const allRooms = roomData?.rooms_by_serial_no[0]?.rooms || [];
  const [rooms, setRooms] = useState<any[]>(allRooms.slice(0, 5));
  const [hasMore, setHasMore] = useState(rooms.length < allRooms.length);

  const fetchMoreRooms = () => {
    const nextRooms = allRooms.slice(rooms.length, rooms.length + 5);
    setRooms((prev) => [...prev, ...nextRooms]);
    if (rooms.length + nextRooms.length >= allRooms.length) {
      setHasMore(false);
    }
  };

  const { isFetching } = useInfiniteScroll(hasMore, fetchMoreRooms);

  return (
    <div >
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
      {isFetching && hasMore && <SkeletonCard />}
      {!hasMore && <p>No more rooms to load.</p>}
    </div>
  );
};

export default RoomList;
