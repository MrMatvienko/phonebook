// import { Container, TitleH1, TitleH2, TitleH3 } from './Gobal.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
// import { selectIsRefreshing } from 'store/auth/selectors';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'store/auth/operations';
import { Wrapper } from './Gobal.styled';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch(); // Отримуємо функцію dispatch для відправки дій до Redux store
  const { isRefreshing } = useAuth(); // Отримуємо стан аутентифікації користувача

  useEffect(() => {
    dispatch(refreshUser()); // Викликаємо функцію оновлення користувача при монтажі компонента або зміні dispatch
  }, [dispatch]);
  return isRefreshing ? (
    <p>Оновлення користувача...</p>
  ) : (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </Wrapper>
  );
};

export default App;

// <Container>
//   <TitleH1>PhoneBook</TitleH1>
//   <ContactForm />
//   <TitleH2>Contacts</TitleH2>
//   <TitleH3>Find contacts by name</TitleH3>
//   <Filter />
//   <ContactList />
// </Container>
