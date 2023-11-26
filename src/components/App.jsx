import css from 'components/Phonebook/Phonebook.module.css';
import ContactForm from "components/Phonebook/ContactForm";
import ContactList from "components/Phonebook/ContactList";
import ContactsFilter from "components/Phonebook/ContactFilter";

const App = () => {

    return (
      <div className={css.phonebookForm}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <div className={css.bookContainer}>
          <ContactForm/>
          <ContactsFilter />
        </div>
        <h2 className={css.secTitle}>Contacts</h2>
        <ContactList />
      </div>
    )
};
    
export default App;