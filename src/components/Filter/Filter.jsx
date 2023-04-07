import { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { filter } = this.props;

    return (
      <label className={css.label}>
        <p className={css.paragraph}>Filter by Name</p>
        <input type="text" onChange={filter}></input>
      </label>
    );
  }
}
