import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts.reducer";
import { selectIsDeleting } from "redux/contacts/contacts.selectors";

const ContactListItem = ({contact}) => {

  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);

  const handleDeleteClick = () => {
    if (!isDeleting) {
      dispatch(deleteContact(contact.id));
    }
  };

  return (
    <li key={contact.id} className={css.contactListItem}>
      {contact.name}: {contact.phone}
      <button onClick={handleDeleteClick} className={css.delBtn}></button>
    </li>
  );
};

export default ContactListItem;