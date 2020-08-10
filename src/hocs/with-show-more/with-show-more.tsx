import * as React from 'react';
import {Subtract} from 'utility-types';

import {FILMS_PORTION} from '../../consts';

const withShowMore = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithShowMore extends React.PureComponent {
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

  // WithShowMore.propTypes = {
  //   films: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.number,
  //     title: PropTypes.string,
  //     genre: PropTypes.string,
  //     year: PropTypes.number,
  //     bgColor: PropTypes.string,
  //     cover: PropTypes.string,
  //     poster: PropTypes.string,
  //     isFavorite: PropTypes.bool,
  //     preview: PropTypes.string,
  //     source: PropTypes.string,
  //   })).isRequired,
  // };

  return WithShowMore;

};

export default withShowMore;
