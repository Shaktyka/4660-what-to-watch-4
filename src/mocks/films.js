const FILMS_DATA = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2018,
    preview: `bohemian-rhapsody.jpg`,
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
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 2,
    title: `Dardjeeling Limited`,
    preview: `dardjeeling-limited.jpg`,
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 3,
    title: `Fantastic beasts: the crimes of Grindelwald`,
    preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
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
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 4,
    title: `Johnny English`,
    preview: `johnny-english.jpg`,
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 5,
    title: `Macbeth`,
    preview: `macbeth.jpg`,
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
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 6,
    title: `Midnight Special`,
    preview: `midnight-special.jpg`,
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 7,
    title: `Mindhunter`,
    preview: `mindhunter.jpg`,
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
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 8,
    title: `Moonrise Kingdom`,
    preview: `moonrise-kingdom.jpg`,
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

export default FILMS_DATA;
