import { useDispatch } from 'react-redux';
import { FilterField } from './Filter.styled';
import { setFilter } from '../../redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterField>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </FilterField>
  );
};
