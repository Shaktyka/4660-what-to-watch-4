import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import NameSpace from '../../reducer/name-space';

import AddReview from './add-review';

const films = [{
  bgColor: `#A6B7AC`,
  cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City
    seeking revenge against Bill the Butcher, his father's killer.`,
  director: `Martin Scorsese`,
  duration: 167,
  genre: `Crime`,
  id: 1,
  isFavorite: false,
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  preview: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingCount: 370881,
  ratingScore: 8.8,
  source: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  title: `Gangs of new york`,
  year: 2002
}];

const userData = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatar: `img/1.png`
};

const mockStore = configureStore([]);

describe(`AddReview rendering`, () => {

  it(`AddReview renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films,
        postingReviewError: ``,
        isReviewPosting: false,
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        userData,
      }
    });

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <AddReview
                films={films}
                filmId={1}
                history={{push: () => {}}}
              />
            </Provider>
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
