import React from 'react';
import Title from './Title';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Trans } from 'react-i18next';

const Intro = (props) => {
  const introAbout = <Trans i18nKey='introAbout'></Trans>;
  const introAccommodation = <Trans i18nKey='introAccommodation'></Trans>;
  const introRestaurant = <Trans i18nKey='introRestaurant'></Trans>;
  const introEntertainment = <Trans i18nKey='introEntertainment'></Trans>;
  const introAboutDesc = <Trans i18nKey='introAboutDesc'></Trans>;
  const introAccommodationDesc = (
    <Trans i18nKey='introAccommodationDesc'></Trans>
  );
  const introRestaurantDesc = <Trans i18nKey='introRestaurantDesc'></Trans>;
  const introEntertainmentDesc = (
    <Trans i18nKey='introEntertainmentDesc'></Trans>
  );

  return (
    <div className='loading'>
      <Title title={props.intro}></Title>

      <Tabs className='Tabs'>
        <TabList className='TabList'>
          <Tab className='Tab'>{introAbout}</Tab>
          <Tab className='Tab'>{introAccommodation}</Tab>
          <Tab className='Tab'>{introRestaurant} </Tab>
          <Tab className='Tab'>{introEntertainment} </Tab>
        </TabList>

        <TabPanel className='TabPanel'>
          <p>{introAboutDesc}</p>
        </TabPanel>
        <TabPanel className='TabPanel'>
          <p>{introAccommodationDesc}</p>
        </TabPanel>
        <TabPanel className='TabPanel'>
          <p>{introRestaurantDesc} </p>
        </TabPanel>
        <TabPanel className='TabPanel'>
          <p>{introEntertainmentDesc} </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Intro;
