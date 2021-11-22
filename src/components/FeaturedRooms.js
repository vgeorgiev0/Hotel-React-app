import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import { Trans } from 'react-i18next';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const featured = <Trans i18nKey='featured'></Trans>;
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className='featured-rooms'>
        <Title title={featured} />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
