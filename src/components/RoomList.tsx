import React, { useState, useMemo } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import RoomCard from "./RoomCard";
import data from "../data.json";
import { RoomDataList } from "../types";
import Loader from "../util/Loader";

const RoomList: React.FC = () => {
  const roomData = data as RoomDataList | any;
  const allRooms = useMemo(() => roomData?.rooms_by_serial_no[0]?.rooms || [], [roomData]);

  const [rooms, setRooms] = useState<any[]>(allRooms.slice(0, 5));
  const [hasMore, setHasMore] = useState(rooms.length < allRooms.length);

  const fetchMoreRooms = () => {
    setTimeout(() => { // Simulate async fetch
      const nextRooms = allRooms.slice(rooms.length, rooms.length + 5);
      setRooms((prev) => [...prev, ...nextRooms]);
      if (rooms.length + nextRooms.length >= allRooms.length) {
        setHasMore(false);
      }
    }, 300); // Add a delay for smoother updates
  };

  const { isFetching } = useInfiniteScroll(hasMore, fetchMoreRooms);

  return (
    <div>
      {rooms.map((room, index) => (
        <RoomCard key={room.id || index} room={room} />
      ))}
      {isFetching && <Loader />}
      {!hasMore && <p>No more rooms to load.</p>}
    </div>
  );
};

export default RoomList;
