import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../sliderData';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    setPeople(data);
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, people.length]);

  return (
    <section style={{ width: '90vw', margin: '5rem auto', maxWidth: '1170px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '500',
          }}
        >
          <span style={{ fontSize: '0.85em', color: 'hsl(21,62%,45%)' }}>
            /
          </span>
          Reviews
        </h2>
      </div>
      <div
        style={{
          margin: '0 auto',
          marginTop: '4rem',
          width: '80vw',
          height: '450px',
          maxWidth: '800px',
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'translateX(100%)';
          let opacity = 0;
          if (personIndex === index) {
            position = 'translateX(0)';
            opacity = 1;
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'translateX(-100%)';
          }

          return (
            <article
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                opacity: opacity,
                transition: 'all 0.3 linear',
                transform: position,
              }}
              key={id}
            >
              <img
                src={image}
                alt={name}
                style={{
                  borderRadius: '50%',
                  marginBottom: '1rem',
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  border: '4px solid hsl(210,31%,80%)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                  display: 'table-cell',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                }}
              />
              <h4
                style={{
                  textTransform: 'uppercase',
                  color: 'hsl(21,62%,45%)',
                  marginBottom: '0.25rem',
                }}
              >
                {name}
              </h4>
              <p
                style={{
                  textTransform: 'capitalize',
                  marginBottom: '0.75rem',
                  color: 'hsl(209, 34%, 30%);',
                }}
              >
                {title}
              </p>
              <p
                style={{
                  maxWidth: '35em',
                  margin: '0 auto',
                  marginTop: '2rem',
                  lineHeight: '2',
                  color: 'hsl(210, 22%, 49%)',
                }}
              >
                {quote}
              </p>
              <FaQuoteRight
                style={{
                  fontSize: '1rem',
                  marginTop: '1rem',
                  color: 'hsl(21, 62%, 45%)',
                }}
              />
            </article>
          );
        })}
        <button
          style={{
            position: 'absolute',
            top: '200px',
            transform: 'translateY(-50%)',
            background: 'hsl(210, 22%, 49%)',
            color: '#fff',
            width: '1.25rem',
            height: '1.25rem',
            display: 'grid',
            placeItems: 'center',
            borderColor: 'transparent',
            fontSize: '1rem',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            transition: 'all 0.3s linear',
            left: '0',
          }}
          onClick={prevSlide}
        >
          <FiChevronLeft />
        </button>
        <button
          style={{
            position: 'absolute',
            top: '200px',
            transform: 'translateY(-50%)',
            background: 'hsl(210, 22%, 49%)',
            color: '#fff',
            width: '1.25rem',
            height: '1.25rem',
            display: 'grid',
            placeItems: 'center',
            borderColor: 'transparent',
            fontSize: '1rem',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            transition: 'all 0.3s linear',
            right: '0',
          }}
          onClick={nextSlide}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
