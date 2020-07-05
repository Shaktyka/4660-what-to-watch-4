import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FilmDetails from './film-details.jsx';

const TABS = [`Overview`, `Details`, `Reviews`];

const FILMS_DATA = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2018,
    preview: `/img/bohemian-rhapsody.jpg`,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.6,
    ratingCount: 240,
    description: [
      `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    duration: 120,
    reviews: [
      {
        text: `1 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  },
  {
    id: 2,
    title: `Dardjeeling Limited`,
    preview: `/img/dardjeeling-limited.jpg`,
    genre: `Comedy`,
    year: 2019,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 7.6,
    ratingCount: 140,
    description: [
      `Dardjeeling Limited is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 129,
    reviews: [
      {
        text: `2 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `22 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  },
  {
    id: 3,
    title: `Fantastic beasts: the crimes of Grindelwald`,
    preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Fantasy`,
    year: 2019,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 9.7,
    ratingCount: 300,
    description: [
      `Fantastic beasts is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://upload.wikimedia.org/wikipedia/commons/1/1b/Por_qu%C3%A9_hay_desabastecimiento_en_Venezuela.ogv`,
    duration: 132,
    reviews: [
      {
        text: `3 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `33 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `333 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  },
  {
    id: 4,
    title: `Johnny English`,
    preview: `/img/johnny-english.jpg`,
    genre: `Biography`,
    year: 2016,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.2,
    ratingCount: 150,
    description: [
      `Johnny English is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/6/62/MyHome.webm`,
    duration: 86,
    reviews: [
      {
        text: `4 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `44 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `4444 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  },
  {
    id: 5,
    title: `Macbeth`,
    preview: `/img/macbeth.jpg`,
    genre: `Crime`,
    year: 2017,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 4.5,
    ratingCount: 192,
    description: [
      `Macbeth is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://upload.wikimedia.org/wikipedia/commons/3/3c/NETSPACE-10_years.webm`,
    duration: 156,
    reviews: [
      {
        text: `5 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `55 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `555 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `5555 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  },
  {
    id: 6,
    title: `Midnight Special`,
    preview: `/img/midnight-special.jpg`,
    genre: `Fighter`,
    year: 2015,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 5.9,
    ratingCount: 210,
    description: [
      `Midnight Special is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/4/41/110811-water-droplets-on-lake.ogv`,
    duration: 124,
    reviews: [
      {
        text: `6 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `66 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `666 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `6666 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `66666 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `666666 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  },
  {
    id: 7,
    title: `Mindhunter`,
    preview: `/img/mindhunter.jpg`,
    genre: `Drama`,
    year: 2018,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 6.7,
    ratingCount: 410,
    description: [
      `Mindhunter is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv`,
    duration: 102,
    reviews: [
      {
        text: `7 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  },
  {
    id: 8,
    title: `Moonrise Kingdom`,
    preview: `/img/moonrise-kingdom.jpg`,
    genre: `Fantasy`,
    year: 2014,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 7.5,
    ratingCount: 80,
    description: [
      `Moonrise Kingdom is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/9/97/YBCO_video.webm`,
    duration: 98,
    reviews: [
      {
        text: `8 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `88 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  }
];

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

const mockStore = configureStore([]);

describe(`FilmDetails renders details screen accordingly with selected tab`, () => {

  it(`FilmDetails renders MovieOverview screen with Overview tab selected`, () => {
    const onTabClick = jest.fn();

    const store = mockStore({
      filmsList: FILMS_DATA,
      movieNavTabs: TABS,
      activeMovieNavTab: `Overview`
    });

    const filmDetails = mount(
        <Provider store={store}>
          <FilmDetails
            onTabClick={onTabClick}
            filmData={FILMS_DATA[0]}
            films={FILMS_DATA}
          />
        </Provider>
    );

    const allTabs = filmDetails.find(`.movie-nav__item`);
    const firstTab = allTabs.at(0);
    firstTab.simulate(`click`, mockEvent);

    const screen = filmDetails.find(`.movie-card__text`);

    expect(screen).toBeTruthy();
  });

/*
  it(`FilmDetails renders MovieDetails screen with Details tab selected`, () => {

  });

  it(`FilmDetails renders MovieReviews screen with Reviews tab selected`, () => {

  });
*/
});
