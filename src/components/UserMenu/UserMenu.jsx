import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { selectUser } from 'store/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome to Phonebook {user.name} </p>{' '}
      {/* Відображення привітання з ім'ям користувача */}
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>{' '}
      {/* Кнопка для виходу з облікового запису користувача */}
    </div>
  );
};
