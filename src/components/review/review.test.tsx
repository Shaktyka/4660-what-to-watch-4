import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {review} from '../test-data';

import Review from './review';

describe(`Review rendering`, () => {

  it(`Review renders correctly`, () => {
    const {id, text, authorName, authorId, date, rating} = review;

    const tree = renderer
      .create(
          <Review
            id={id}
            text={text}
            authorId={authorId}
            authorName={authorName}
            date={date}
            rating={rating}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
