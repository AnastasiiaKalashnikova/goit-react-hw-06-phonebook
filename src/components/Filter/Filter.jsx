import { FilterField } from './Filter.styled';

export const Filter = ({ toFilter }) => {
  return (
    <FilterField>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        onChange={evt => toFilter(evt.target.value)}
      />
    </FilterField>
  );
};
