import dekiMain from './images/deki/dekiMain.jpg';
import deki1 from './images/deki/1.JPG';
import deki2 from './images/deki/2.JPG';
import deki3 from './images/deki/3.JPG';
import deki4 from './images/deki/4.JPG';
import deki5 from './images/deki/5.jpg';
import deki6 from './images/deki/6.JPG';
import deki7 from './images/deki/7.jpg';

import tinaMain from './images/tina/tinaMain.jpg';
import tina1 from './images/tina/1.JPG';
import tina2 from './images/tina/2.JPG';
import tina3 from './images/tina/3.JPG';
import tina4 from './images/tina/4.JPG';
import tina5 from './images/tina/5.JPG';
import tina6 from './images/tina/6.JPG';
import tina7 from './images/tina/7.JPG';

// import roomEli1 from './images/eli/room/1.jpg';
// import roomEli2 from './images/eli/room/2.jpg';
// import roomEli3 from './images/eli/room/3.jpg';
// import roomEli4 from './images/eli/room/4.jpg';
// import roomEli5 from './images/eli/room/5.jpg';
// import roomEli6 from './images/eli/room/6.jpg';

import apartmentEli1 from './images/eli/apartment/1.jpg';
import apartmentEli2 from './images/eli/apartment/2.jpg';
import apartmentEli3 from './images/eli/apartment/3.jpg';
import apartmentEli4 from './images/eli/apartment/4.jpg';
import apartmentEli5 from './images/eli/apartment/5.jpg';
import apartmentEli6 from './images/eli/apartment/6.jpg';

import flat1 from './images/flat/1.jpg';
import flat2 from './images/flat/2.jpg';
import flat3 from './images/flat/3.jpg';
import flat4 from './images/flat/4.jpg';
import flat5 from './images/flat/5.jpg';
import flat6 from './images/flat/6.jpg';
import flat7 from './images/flat/7.jpg';
import flat8 from './images/flat/8.jpg';
import flat9 from './images/flat/9.jpg';
import flat10 from './images/flat/10.jpg';

const data = [
  {
    sys: {
      id: '1',
    },
    fields: {
      name: 'dekiTitle',
      slug: 'apartment-deki',
      double: true,
      doubleDetails: 'doubleDetails',
      firstRoom: [
        {
          fields: {
            name: 'firstRoomDeki',
            price: 20,
            capacity: 2,
          },
        },
      ],
      secondRoom: [
        {
          fields: {
            name: 'secondRoomDeki',
            price: 20,
            capacity: 2,
          },
        },
      ],
      price: 45,
      size: 54,
      capacity: 4,
      description: 'dekiDetails',
      extras: ['dekiExtra1', 'dekiExtra2', 'dekiExtra3', 'dekiExtra4'],
      images: [
        {
          fields: {
            file: {
              url: dekiMain,
            },
          },
        },
        {
          fields: {
            file: {
              url: deki1,
            },
          },
        },
        {
          fields: {
            file: {
              url: deki2,
            },
          },
        },
        {
          fields: {
            file: {
              url: deki3,
            },
          },
        },
        {
          fields: {
            file: {
              url: deki4,
            },
          },
        },
        {
          fields: {
            file: {
              url: deki5,
            },
          },
        },
        {
          fields: {
            file: {
              url: deki6,
            },
          },
        },
        {
          fields: {
            file: {
              url: deki7,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '2',
    },
    fields: {
      name: 'tinaTitle',
      slug: 'apartment-tina',
      price: 45,
      size: 54,
      capacity: 4,
      featured: true,
      description: 'tinaDetails',
      extras: [
        'tinaExtra1',
        'tinaExtra2',
        'tinaExtra3',
        'tinaExtra4',
        'tinaExtra5',
        'tinaExtra6',
      ],
      images: [
        {
          fields: {
            file: {
              url: tinaMain,
            },
          },
        },
        {
          fields: {
            file: {
              url: tina1,
            },
          },
        },
        {
          fields: {
            file: {
              url: tina2,
            },
          },
        },
        {
          fields: {
            file: {
              url: tina3,
            },
          },
        },
        {
          fields: {
            file: {
              url: tina4,
            },
          },
        },
        {
          fields: {
            file: {
              url: tina5,
            },
          },
        },
        {
          fields: {
            file: {
              url: tina6,
            },
          },
        },
        {
          fields: {
            file: {
              url: tina7,
            },
          },
        },
      ],
    },
  },
  // {
  //   sys: {
  //     id: '3',
  //   },
  //   fields: {
  //     name: 'eliTitle',
  //     slug: 'double-room-eli',
  //     price: 20,
  //     size: 16,
  //     capacity: 2,
  //     description: 'eliDetails',
  //     extras: [
  //       'eliExtra1',
  //       'eliExtra2',
  //       'eliExtra3',
  //       'eliExtra4',
  //       'eliExtra5',
  //       'eliExtra6',
  //       'eliExtra7',
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: roomEli1,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: roomEli2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: roomEli3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: roomEli4,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: roomEli5,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: roomEli6,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    sys: {
      id: '4',
    },
    fields: {
      name: 'apartmentEliTitle',
      slug: 'apartment-eli',
      double: true,
      doubleDetails: 'doubleDetails',
      firstRoom: [
        {
          fields: {
            name: 'firstRoomEli',
            price: 25,
            capacity: 2,
          },
        },
      ],
      secondRoom: [
        {
          fields: {
            name: 'secondRoomEli',
            price: 20,
            capacity: 2,
          },
        },
      ],
      price: 40,
      size: 36,
      capacity: 2,
      featured: true,
      description: 'apartmentEliDetails',
      extras: [
        'apartmentEliExtra1',
        'apartmentEliExtra2',
        'apartmentEliExtra3',
        'apartmentEliExtra4',
        'apartmentEliExtra5',
        'apartmentEliExtra6',
        'apartmentEliExtra7',
      ],
      images: [
        {
          fields: {
            file: {
              url: apartmentEli1,
            },
          },
        },
        {
          fields: {
            file: {
              url: apartmentEli2,
            },
          },
        },
        {
          fields: {
            file: {
              url: apartmentEli3,
            },
          },
        },
        {
          fields: {
            file: {
              url: apartmentEli4,
            },
          },
        },
        {
          fields: {
            file: {
              url: apartmentEli5,
            },
          },
        },
        {
          fields: {
            file: {
              url: apartmentEli6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '5',
    },
    fields: {
      name: 'flatTitle',
      slug: 'flat',
      price: 60,
      size: 85,
      capacity: 6,
      description: 'flatDetails',
      extras: ['flatExtra1', 'flatExtra2', 'flatExtra3'],
      images: [
        {
          fields: {
            file: {
              url: flat1,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat2,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat3,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat4,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat5,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat6,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat7,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat8,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat9,
            },
          },
        },
        {
          fields: {
            file: {
              url: flat10,
            },
          },
        },
      ],
    },
  },
];

export default data;
