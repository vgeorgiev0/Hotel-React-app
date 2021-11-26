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
    };
  }
  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className='error'>
          <h3>No such room could be found...</h3>
          <Link to='/apartments' className='btn-primary'>
            Back to apartments
          </Link>
        </div>
      );
    }
    const { name, description, capacity, size, price, extras, images } = room;

    const [mainImg, ...defaultImg] = images;

    const { t } = this.props;

    return (
      <div>
        <RoomImage img={mainImg || this.state.defaultBcg}>
          <Banner title={` ${t('apartment')} ${t(name)} `}>
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
              <h3>{t('apartmentInfo')}</h3>
              <h6>
                {t('perNight')} : € {price}
              </h6>
              <h6>
                {t('roomSize')} : {size}
                {t('sqr')}
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
      </div>
    );
  }
}

export default withTranslation()(SingleRoom);
