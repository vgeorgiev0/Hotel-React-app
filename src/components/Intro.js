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
