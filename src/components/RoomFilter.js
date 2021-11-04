import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

// Get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);

  const {
    type,
    capacity,
    price,
    handleChange,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // Get unique types
  let types = getUnique(rooms, 'type');

  // Get all
  types = ['all', ...types];

  // Map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // Guests
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className='filter-container'>
      <Title title='search apartments' />
      <form className='filter-form'>
        {/* Select type */}
        <div className='form-group'>
          <label htmlFor='type'>apartment type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End select type */}
        {/* Guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>apartment capacity</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* End of guests */}
        {/* Room price */}
        <div className='form-group'>
          <label htmlFor='price'>apartment price $ {price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* End of room price */}
        {/* Size */}
        <div className='form-group'>
          <label htmlFor='size'>apartment size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              value={minSize}
              id='size'
              onChange={handleChange}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              value={maxSize}
              id='size'
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>
        {/* End of size */}
        {/* Extras  */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>pets</label>
          </div>
        </div>
        {/* End of extras */}
      </form>
    </section>
  );
};

export default RoomFilter;
