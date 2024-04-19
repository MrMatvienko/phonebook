import { useDispatch, useSelector } from 'react-redux';
import {
  AddText,
  BtnDelete,
  Item,
  SearchInput,
  StylePar,
  StyledUl,
  Text,
  Wrapper,
} from './ContactList.styled';
import { deleteContacts } from 'store/API';
import { selectVisibleContacts } from 'store/Contacts/selectors';
import { Filter } from 'components/Filter/Filter';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  return (
    <Wrapper>
      <SearchInput>
        <Text>Find contacts by name</Text>
        <Filter />
      </SearchInput>

      {contacts.length === 0 ? (
        <AddText>Add contacts please...</AddText>
      ) : (
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
      )}
    </Wrapper>
  );
};
