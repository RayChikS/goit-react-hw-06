import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const searchId = useId();

  return (
    <div className={css.form}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input className={css.field} type="text" name="search" id={searchId} />
    </div>
  );
}
