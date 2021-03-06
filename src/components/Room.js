import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/DSCN8304.JPG';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

const Room = ({ room }) => {
  const { name, slug, images } = room;
  const { t } = useTranslation();

  const viewApartment = <Trans i18nKey='viewApartment'></Trans>;

  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='single room' />
        <Link to={`/apartments/${slug}`} className='btn-primary room-link'>
          {viewApartment}
        </Link>
      </div>
      <p className='room-info'>{t(name)}</p>
    </article>
  );
};

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
