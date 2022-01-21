import React, { Component } from 'react';
import defaultBcg from '../images/DSCN8304.JPG';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import RoomImage from '../components/StyledHero';
import { withTranslation } from 'react-i18next';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      apartment: 'apartment' || 'flatName',
    };
  }
  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    const { t } = this.props;

    if (!room) {
      return (
        <div className='error'>
          <h3>No such room could be found...</h3>
          <Link to='/apartments' className='btn-primary'>
            {t('backToApartments')}
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      images,
      double,
      // doubleDetails,
      firstRoom,
      secondRoom,
    } = room;

    const [mainImg, ...defaultImg] = images;

    let apartmentName = this.state.apartment;

    if (this.state.slug === 'flat') {
      apartmentName = '';
    }

    return (
      <div>
        <RoomImage img={mainImg || this.state.defaultBcg}>
          <Banner title={` ${t(apartmentName)} ${t(name)} `}>
            <Link to='/apartments' className='btn-primary'>
              {t('backToApartments')}
            </Link>
          </Banner>
        </RoomImage>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>{t('apartmentDetail')}</h3>
              <p>{t(description)}</p>
            </article>
            <article className='info'>
              {!double && <h3>{t('apartmentInfo')}</h3>}
              {double && <h3>{t('doubleApartmentInfo')}</h3>}
              <h6>
                {t('perNight')} : € {price}
              </h6>
              <h6>
                {t('roomSize')} : {size} {t('sqr')}
              </h6>
              <h6>
                {t('roomCapacity')} :
                {capacity > 1
                  ? ` ${capacity} ${t('people')} `
                  : `${capacity} ${t('person')}`}
              </h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>{t('roomExtras')}</h6>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <li key={index}>* {t(item)}</li>;
            })}
          </ul>
        </section>
        {double && (
          <section className='room-extras'>
            <h2 className='loading' style={{ marginTop: '4rem' }}>
              {t('doubleDetails')}
            </h2>
            <div className='single-room-info'>
              <article className='desc'>
                <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  {t(firstRoom.fields.name)}
                </h3>
                <ul className='extras' style={{ textAlign: 'center' }}>
                  {firstRoom.fields.extras.map((item, index) => {
                    return <li key={index}>* {t(item)}</li>;
                  })}
                  <li>
                    <h6 style={{ fontWeight: '300' }}>
                      {t('perNight')} : € {firstRoom.fields.price}
                    </h6>
                  </li>
                  <li>
                    <h6 style={{ fontWeight: '300' }}>
                      {t('roomCapacity')} :
                      {firstRoom.fields.capacity > 1
                        ? ` ${firstRoom.fields.capacity} ${t('people')} `
                        : `${firstRoom.fields.capacity} ${t('person')}`}
                    </h6>
                  </li>
                </ul>
              </article>
              <article className='desc'>
                <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  {t(secondRoom.fields.name)}
                </h3>
                <ul className='extras' style={{ textAlign: 'center' }}>
                  {secondRoom.fields.extras.map((item, index) => {
                    return <li key={index}>* {t(item)}</li>;
                  })}
                  <li>
                    <h6 style={{ fontWeight: '300' }}>
                      {t('perNight')} : € {secondRoom.fields.price}
                    </h6>
                  </li>
                  <li>
                    <h6 style={{ fontWeight: '300' }}>
                      {t('roomCapacity')} :
                      {secondRoom.fields.capacity > 1
                        ? ` ${secondRoom.fields.capacity} ${t('people')} `
                        : `${secondRoom.fields.capacity} ${t('person')}`}
                    </h6>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        )}
        <div className='loading' style={{ paddingBottom: '10vh' }}>
          <Link to='/contact' className='btn-primary'>
            {t('book')}
          </Link>
        </div>
      </div>
    );
  }
}

export default withTranslation()(SingleRoom);
