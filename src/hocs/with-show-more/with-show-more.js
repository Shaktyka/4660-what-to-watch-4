import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {FILMS_PORTION} from '../../consts.js';

const withShowMore = (Component) => {

  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        renderedFilms: props.films.slice(0, FILMS_PORTION),
        isShowedShowMore: true, // как установить и потом менять?
      };

      this._handleShowMoreClick = this._handleShowMoreClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          renderedFilms: this.props.films.slice(0, FILMS_PORTION)
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

  WithShowMore.propTypes = {
    films: PropTypes.array.isRequired
  };

  return WithShowMore;

};

export default withShowMore;
