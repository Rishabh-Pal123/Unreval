import React, { useState, useMemo } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import RoomCard from "./RoomCard";
import data from "../data.json";
import { RoomDataList } from "../types";
import Loader from "../util/Loader";

const RoomList: React.FC = () => {
  const roomData = data as RoomDataList | any;
  const allRooms = roomData?.rooms_by_serial_no[0]?.rooms || [];

  const [rooms, setRooms] = useState<any[]>(allRooms.slice(0, 5));
  const [hasMore, setHasMore] = useState(rooms.length < allRooms.length);

  // Memoize the filtered/sliced room data to avoid recalculations on every render
  const displayedRooms = useMemo(() => rooms, [rooms]);

  const fetchMoreRooms = () => {
    const nextRooms = allRooms.slice(rooms.length, rooms.length + 5);
    setRooms((prev) => [...prev, ...nextRooms]);
    if (rooms.length + nextRooms.length >= allRooms.length) {
      setHasMore(false);
    }
  };

  const { isFetching } = useInfiniteScroll(hasMore, fetchMoreRooms);

  return (
    <div>
      {displayedRooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
      {isFetching && <Loader />}
      {!hasMore && <p>No more rooms to load.</p>}
    </div>
  );
};

export default RoomList;
