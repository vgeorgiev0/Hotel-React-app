import React from 'react';
import Banner from './Banner';
import { Trans } from 'react-i18next';

const Intro = () => {
  const title = <Trans>A place where you can feel at home</Trans>;
  const p = (
    <Trans>
      The Morava ŽIS farm, the place where an ideal holiday is guaranteed, is
      located in the village of Mezgraja, located on the Morava River just 2 km
      from the Naiss Motel. It has 2 apartments with 2 + 2 beds, a double room
      with a bathroom, a large accommodation unit of 80 sqm with 4 + 4 beds
      (ideal for two families), and a smaller one with 3 + 3 beds (also suitable
      for two three-person families) . Each unit has IPTV, air conditioning, and
      free WiFi is available throughout the complex. Covered veranda - large
      dining room with billiards, pool table and table tennis, beautifully
      landscaped courtyard with swimming pool, football pitch, mini-amusement
      park with swings, seesaws and more for the youngest, as well as a separate
      parking lot provides all the conditions make your stay in our complex
      unforgettable. We pay special attention to our beautiful restaurant with a
      capacity of 100 guests, where for years we have been organizing
      unforgettable festivities: weddings, first birthdays, 18th birthdays...
      The proximity of various cultural sights and many picnics in nature, and
      especially the tranquility of untouched nature, make our locality
      extremely attractive.
    </Trans>
  );
  return (
    <div className='loading'>
      <Banner title={title} subtitle={p}></Banner>
    </div>
  );
};

export default Intro;
