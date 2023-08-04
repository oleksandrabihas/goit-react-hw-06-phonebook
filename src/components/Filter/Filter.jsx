import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { FilterSection } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  const handleFilter = e => {
    dispatch(filterContacts(e.target.value.toLowerCase().trim()));
  }

  return contacts.length !== 0 ? (
    <FilterSection>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handleFilter}
      />
    </FilterSection>
  ) : (
    <NotificationMessage />
  );
};

