const getAdaptedFilm = (data) => {
  return ({
    id: data.id,
    title: data.name,
    preview: data.poster_image,
    poster: data.preview_image,
    cover: data.background_image,
    bgColor: data.background_color,
    source: data.video_link,
    previewVideoLink: data.preview_video_link,
    description: data.decription,
    ratingScore: data.rating,
    ratingCount: data.scores_count,
    director: data.director,
    starring: data.starring,
    duration: data.run_time,
    genre: data.genre,
    year: data.released,
    isFavorite: data.is_favorite
  });
};

const getAdaptedReview = (data) => {
  return ({
    id: data.id,
    authorId: data.user.id,
    authorName: data.user.name,
    rating: data.rating, // число!
    text: data.comment,
    date: data.date
  });
};

// const promoFilmData = {
//   id: 10,
//   title: `The Grand Budapest Hotel`,
//   genre: `Drama`,
//   year: 2014
// };

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
    duration: 120
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
    duration: 129
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
    duration: 132
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
    duration: 86
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
    duration: 156
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
    duration: 124
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
    duration: 102
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
    duration: 98
  }
];

const REVIEWS = [
  {
    text: `6 review`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `8,1`
  },
  {
    text: `66 review`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `7,5`
  },
  {
    text: `666 review`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `6,4`
  },
  {
    text: `6666 review`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `9,0`
  },
  {
    text: `66666 review`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `2,6`
  },
  {
    text: `666666 review`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `5,9`
  }
];

export {FILMS_DATA, REVIEWS, getAdaptedFilm, getAdaptedReview};
