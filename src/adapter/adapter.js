const getAdaptedFilm = (data) => {
  return ({
    id: data.id,
    title: data.name,
    preview: data.preview_image,
    poster: data.poster_image,
    cover: data.background_image,
    bgColor: data.background_color,
    source: data.video_link,
    previewVideoLink: data.preview_video_link,
    description: data.description,
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
    rating: data.rating,
    text: data.comment,
    date: data.date
  });
};

export {getAdaptedFilm, getAdaptedReview};
