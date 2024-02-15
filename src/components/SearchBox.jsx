import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.form}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.field}
        type="text"
        name="search"
        id={searchId}
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
