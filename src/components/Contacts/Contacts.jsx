import { Component } from 'react';
import css from './Contacts.module.css';

export class Contacts extends Component {
  render() {
    const { contactList } = this.props;

    return (
      <div className={css.container}>
        <h4 className={css.title}>Contacts</h4>
        <ul className={css.contactList}>
          {contactList.map(({ id, name, number }) => (
            <li key={id} className={css.listItem}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
