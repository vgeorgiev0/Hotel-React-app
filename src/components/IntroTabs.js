import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { MdRoomService, MdOutlineFamilyRestroom } from 'react-icons/md';
import { FaSwimmingPool } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';
import { Trans } from 'react-i18next';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
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

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: '#CED4DA',
        width: '97vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10vh',
        marginTop: '10vh',
      }}
    >
      <AppBar position='static'>
        <Tabs
          style={{
            backgroundColor: '#CED4DA',
          }}
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='full width tabs example'
        >
          <Tab label={introAbout} icon={<GiFamilyHouse />} {...a11yProps(0)} />
          <Tab
            label={introAccommodation}
            icon={<MdOutlineFamilyRestroom />}
            {...a11yProps(1)}
          />
          <Tab
            label={introRestaurant}
            icon={<MdRoomService />}
            {...a11yProps(2)}
          />
          <Tab
            label={introEntertainment}
            icon={<FaSwimmingPool />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        animateTransitions={true}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {introAboutDesc}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {introAccommodationDesc}
          <br />
          <br />

          <button className='btn-primary'>
            <Link to='/apartments'>See more</Link>
          </button>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {introRestaurantDesc}
          <br />
          <br />
          <button className='btn-primary'>
            <Link to='/restaurant'>See more</Link>
          </button>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          {introEntertainmentDesc}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
