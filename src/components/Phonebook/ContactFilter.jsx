import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';
import { filterContacts } from "redux/contacts/contacts.reducer";
import { useSelector, useDispatch } from "react-redux";
import { selectFilterTerm } from "redux/contacts/contacts.selectors";

const ContactsFilter = () => {

  const dispatch = useDispatch();
  const filterTerm = useSelector(selectFilterTerm);

  const handleFilterChange = (evt) => {
    dispatch(filterContacts(evt.target.value));
};

  return (
    <label className={`${css.formLabel} ${css.searchForm}`}>
      <p>Search by name</p>
      <input type="text" value={filterTerm} onChange={handleFilterChange} className={css.searchInput} />
    </label>
  );
};

export default ContactsFilter;