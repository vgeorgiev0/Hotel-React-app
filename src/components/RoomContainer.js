import React from 'react';
// import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

export default withRoomConsumer(RoomContainer);
