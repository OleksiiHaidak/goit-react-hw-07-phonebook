import { useState } from "react";
import {nanoid} from 'nanoid';
import css from 'components/Phonebook/Phonebook.module.css';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contacts.reducer";
import { selectContacts } from "redux/contacts/contacts.selectors";

const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }};

  const handleSubmit = evt => {
    evt.preventDefault();
    if (name.trim() === "" || phone.trim() === "") {
      return;
    };
    if (contacts.some(contact => contact.name === name)) {
      alert(`"${name}" is already in contacts`);
      return;
      };
      
    const contact = {
      id: nanoid(),
      name,
      phone,
      };
      
    dispatch(addContact(contact));
    setName("");
    setPhone("");
  };

    return (
      <form onSubmit={handleSubmit} className={css.contactsForm}>
        <label className={css.formLabel}>
          <p>Name</p>
            <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className={css.formLabel}>
          <p>Number</p>
            <input
            className={css.input}
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className={css.addBtn}>Add contact</button>
      </form>
    );
}

export default ContactForm;