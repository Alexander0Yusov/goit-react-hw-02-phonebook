import { Component } from 'react';
import css from './Contacts.module.css';

export class Contacts extends Component {
  render() {
    const { contactList, deleteContact } = this.props;

    return (
      <div className={css.container}>
        <ul className={css.contactList}>
          {contactList.map(({ id, name, number }) => (
            <li key={id} className={css.listItem}>
              {name}: {number}
              <button
                onClick={() => deleteContact(id)}
                className={css.button}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
