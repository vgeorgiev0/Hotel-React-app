import React from 'react';
import { Trans } from 'react-i18next';
import Title from './Title';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

const Footer = () => {
  const aboutInfo = [
    {
      title: <Trans i18nKey='address'></Trans>,
      icon: <PlaceIcon/>,
      description: <Trans i18nKey='addressDesc'></Trans>,
      info: 'https://www.google.com/maps/place/Restoran+%C5%BDIS/@43.3877598,21.7627089,14z/data=!4m15!1m7!3m6!1s0x4755c99c33def2eb:0x9e67a37fc410aefd!2zTWV6Z3JhamEsINCh0YrRgNCx0LjRjw!3b1!8m2!3d43.3963872!4d21.7846362!3m6!1s0x4755c99ce220e257:0x7b56374b227c81f3!8m2!3d43.3927307!4d21.7826271!9m1!1b1',
    },
    {
      title: <Trans i18nKey='phone'></Trans>,
      icon: <LocalPhoneIcon/>,
      description: '+381 69 1797 316',
      info: 'tel:+381-691-797-316',
    },
    {
      title: <Trans i18nKey='email'></Trans>,
      icon: <EmailIcon/>,
      description: `slobodan.zivadinovic
      @gmail.com`,
      info: 'mailto:slobodan.zivadinovic@gmail.com',
    },
  ];
  const aboutUs = <Trans i18nKey='aboutUs'></Trans>;

  return (
    <>
      <footer className='footer'>
        <Title title={aboutUs} />
        <div className='footer-center'>
          {aboutInfo.map((item, index) => {
            return (
              <article key={index} className="footer">
                <h6>{item.title}</h6>
                <a
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.info}
                >
                  <div style={{alignItems:'center', justifyContent:'center', display:'flex', marginBottom:'1rem'}}>
                    {item.icon}
                    </div>
                  {item.description}
                  &#8226;
                </a>
              </article>
            );
          })}
        </div>
      </footer>
    </>
  );
};

export default Footer;
