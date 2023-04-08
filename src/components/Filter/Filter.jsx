import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter } = this.props;

    return (
      <label className={css.label}>
        <p className={css.paragraph}>Filter by Name:</p>
        <input type="text" onChange={filter}></input>
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.func,
};
