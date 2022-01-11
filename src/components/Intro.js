import React from 'react';
import Title from './Title';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { Trans } from 'react-i18next';
import IntroTabs from './IntroTabs';

const Intro = (props) => {
  return (
    <div className='loading'>
      <Title title={props.intro}></Title>

      <IntroTabs />
    </div>
  );
};

export default Intro;

//  <Tabs className='Tabs'>
//    <TabList className='TabList'>
//      <Tab className='Tab'>{introAbout}</Tab>
//      <Tab className='Tab'>{introAccommodation}</Tab>
//      <Tab className='Tab'>{introRestaurant} </Tab>
//      <Tab className='Tab'>{introEntertainment} </Tab>
//    </TabList>

//    <TabPanel className='TabPanel'>
//      <p>{introAboutDesc}</p>
//    </TabPanel>
//    <TabPanel className='TabPanel'>
//      <p>{introAccommodationDesc}</p>
//    </TabPanel>
//    <TabPanel className='TabPanel'>
//      <p>{introRestaurantDesc} </p>
//    </TabPanel>
//    <TabPanel className='TabPanel'>
//      <p>{introEntertainmentDesc} </p>
//    </TabPanel>
//  </Tabs>;
