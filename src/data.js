import deki1 from './images/deki/1.JPG';
import deki2 from './images/deki/2.JPG';
import deki3 from './images/deki/3.JPG';
import deki4 from './images/deki/4.JPG';
import deki5 from './images/deki/5.JPG';
import deki6 from './images/deki/6.JPG';

import tinamain from './images/tina/main.JPG';
import tina1 from './images/tina/1.JPG';
import tina2 from './images/tina/2.JPG';
import tina3 from './images/tina/3.JPG';
import tina4 from './images/tina/4.JPG';
import tina5 from './images/tina/5.JPG';
import tina6 from './images/tina/6.JPG';
import tina7 from './images/tina/7.JPG';

import eli1 from './images/eli/1.jpg';
import eli2 from './images/eli/2.jpg';
import eli3 from './images/eli/3.jpg';
import eli4 from './images/eli/4.jpg';
import eli5 from './images/eli/5.jpg';
import eli6 from './images/eli/6.jpg';

const data = [
  {
    sys: {
      id: '1',
    },
    fields: {
      name: 'dekiTitle',
      slug: 'apartment-deki',
      type: 'double',
      price: 38,
      size: 54,
      capacity: 4,
      description: 'dekiDetails',
      extras: ['dekiExtra1', 'dekiExtra2', 'dekiExtra3'],
      images: [
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
      price: 40,
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
        'tinaExtra7',
      ],
      images: [
        {
          fields: {
            file: {
              url: tinamain,
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
  {
    sys: {
      id: '3',
    },
    fields: {
      name: 'eliTitle',
      slug: 'double-room-eli',
      price: 20,
      size: 16,
      capacity: 2,
      description: 'eliDetails',
      extras: [
        'eliExtra1',
        'eliExtra2',
        'eliExtra3',
        'eliExtra4',
        'eliExtra5',
        'eliExtra6',
        'eliExtra7',
      ],
      images: [
        {
          fields: {
            file: {
              url: eli1,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli2,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli3,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli4,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli5,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '4',
    },
    fields: {
      name: 'apartmentEliTitle',
      slug: 'apartment-eli',
      price: 30,
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
              url: eli1,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli2,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli3,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli4,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli5,
            },
          },
        },
        {
          fields: {
            file: {
              url: eli6,
            },
          },
        },
      ],
    },
  },
];

export default data;
