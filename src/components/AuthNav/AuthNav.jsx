import { Link } from 'react-router-dom';

export const AuthNav = () => {
  // Компонент AuthNav відповідає за навігаційну панель для неаутентифікованого користувача

  return (
    <div>
      <Link to="/register">Register</Link>{' '}
      {/* Посилання на сторінку реєстрації користувача */}
      <Link to="/login">Log In</Link>{' '}
      {/* Посилання на сторінку входу користувача */}
    </div>
  );
};
