import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/API';
import { selectIsLoading } from 'store/auth/selectors';
import { Wraper } from './Contacts.styled';
export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
  }, [dispatch]);

  return (
    <Wraper>
      <ContactForm /> {/* Компонент форми для додавання контакту */}
      <div>{isLoading && <Loader />}</div>{' '}
      {/* Відображення повідомлення про виконання запиту */}
      <ContactList /> {/* Компонент для відображення списку контактів */}
    </Wraper>
  );
}
