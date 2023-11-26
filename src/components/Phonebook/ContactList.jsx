import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';
import ContactListItem from "./ContactListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/contacts.reducer";
import { selectVisibleContacts, selectIsAdding, selectIsDeleting, selectIsLoading, selectError } from "redux/contacts/contacts.selectors";


const ContactList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
   }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const isAdding = useSelector(selectIsAdding);
  const isDeleting = useSelector(selectIsDeleting);
  const error = useSelector(selectError);

  return (
    <div>
      {(isLoading && !isAdding && !isDeleting && filteredContacts.length === 0) && <div className={css.message}>Loading, sponsored by data mice...</div>}
      {error && <div className={css.message}>Oops! I did it again... Looks like the code is doing the Macarena</div>}
      {(!filteredContacts.length && !isLoading) && <p className={css.message}>No contacts found - like a graveyard for social connections</p>}
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;