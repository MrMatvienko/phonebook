import { useDispatch, useSelector } from 'react-redux';
import {
  BtnDelete,
  Item,
  StylePar,
  StyledUl,
  Text,
  Title,
} from './ContactList.styled';
import { deleteContacts } from 'store/API';
import { selectVisibleContacts } from 'store/Contacts/selectors';
import { Filter } from 'components/Filter/Filter';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  return (
    <div>
      <Title>Contacts</Title>
      <Text>Find contacts by name</Text>
      <Filter />
      <StyledUl>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <StylePar>{contact.name}</StylePar>
            <StylePar>{contact.number}</StylePar>
            <BtnDelete onClick={() => dispatch(deleteContacts(contact.id))}>
              Delete
            </BtnDelete>
          </Item>
        ))}
      </StyledUl>
    </div>
  );
};
