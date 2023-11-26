import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contactsStore.contacts;
export const selectIsLoading = state => state.contactsStore.isLoading;
export const selectError = state => state.contactsStore.error;
export const selectFilterTerm = state => state.contactsStore.filterTerm;
export const selectIsAdding = state => state.contactsStore.isAdding;
export const selectIsDeleting = state => state.contactsStore.isDeleting;


export const selectVisibleContacts = createSelector(
[selectContacts, selectFilterTerm],
 (contacts, filterTerm) => {
   return contacts.filter(contact => contact.name.toLowerCase().trim()
    .includes(filterTerm.toLowerCase().trim()))
 }
)