import * as React from 'react';
import {Subtract} from 'utility-types';
import {FilmInterface} from '../../types';

import {FILMS_PORTION} from '../../consts';

interface InjectingProps {
  films: FilmInterface[];
  isShowed: boolean;
  onShowMoreClick(): void;
}

interface State {
  renderedFilms: FilmInterface[];
  isShowedShowMore: boolean;
}

const withShowMore = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithShowMore extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        renderedFilms: props.films.slice(0, FILMS_PORTION),
        isShowedShowMore: false
      };

      this._handleShowMoreClick = this._handleShowMoreClick.bind(this);
    }

    componentDidMount() {
      this.setState({
        isShowedShowMore: this.props.films.length > FILMS_PORTION
      });
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          renderedFilms: this.props.films.slice(0, FILMS_PORTION),
          isShowedShowMore: this.props.films.length > FILMS_PORTION
        });
      }
    }

    _handleShowMoreClick() {
      this.setState((prevState) => ({
        renderedFilms: [
          ...prevState.renderedFilms,
          ...this.props.films.slice(
              prevState.renderedFilms.length,
              prevState.renderedFilms.length + FILMS_PORTION
          )
        ],
        isShowedShowMore: prevState.renderedFilms.length + FILMS_PORTION <= this.props.films.length
      }));
    }

    render() {
      const {isShowedShowMore} = this.state;
      const {renderedFilms} = this.state;

      return (
        <Component
          {...this.props}
          films={renderedFilms}
          isShowed={isShowedShowMore}
          onShowMoreClick={this._handleShowMoreClick}
        />
      );
    }
  }

  return WithShowMore;

};

export default withShowMore;
