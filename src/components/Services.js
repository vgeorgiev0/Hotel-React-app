import React from 'react';
import Title from './Title';
import { Trans } from 'react-i18next';

import { MdRoomService, MdOutlineFamilyRestroom } from 'react-icons/md';
import { FaSwimmingPool } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';

const Services = () => {
  const services = [
    {
      icon: <MdRoomService />,
      title: <Trans i18nKey='cuisine'></Trans>,
      info: <Trans i18nKey='cuisineDesc'></Trans>,
    },
    {
      icon: <GiFamilyHouse />,
      title: <Trans i18nKey='hospitality'></Trans>,
      info: <Trans i18nKey='hospitalityDesc'></Trans>,
    },
    {
      icon: <FaSwimmingPool />,
      title: <Trans i18nKey='fun'></Trans>,
      info: <Trans i18nKey='funDesc'></Trans>,
    },
    {
      icon: <MdOutlineFamilyRestroom />,
      title: <Trans i18nKey='acc'></Trans>,
      info: <Trans i18nKey='accDesc'></Trans>,
    },
  ];
  const title = <Trans i18nKey='service'></Trans>;

  return (
    <section className='services'>
      <Title title={title} />
      <div className='services-center'>
        {services.map((item, index) => {
          return (
            <article key={index} className='service'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
