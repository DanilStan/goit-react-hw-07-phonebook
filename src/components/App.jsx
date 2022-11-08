import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { fetchContacts } from 'redux/ContactList/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectorError, selectorIsLoading } from 'redux/selectors';
import {
  Section,
  SectionTitlePrimary,
  SectionTitleSecondary,
} from './App.styled';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <SectionTitlePrimary>Phonebook</SectionTitlePrimary>
      <Form />

      <SectionTitleSecondary>Contacts</SectionTitleSecondary>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </Section>
  );
}
