import { Component } from 'react';
import css from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
  };

  handlerSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handlerChangeName = e => {
    //  const { name, value } = e.currentTarget;
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit} className={css.form}>
        <label className={css.formLabel}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handlerChangeName}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
