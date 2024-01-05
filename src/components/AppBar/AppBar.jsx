import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth(); // Отримуємо стан аутентифікації користувача

  // Компонент AppBar відповідає за верхню панель додатка, яка містить навігацію та відповідний контент для аутентифікованого та неаутентифікованого користувача.

  // Використовуємо useAuth з нашого власного хука useAuth, щоб отримати дані про аутентифікацію користувача.

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* Відображаємо UserMenu, якщо користувач аутентифікований, або AuthNav, якщо користувач неаутентифікований */}
    </header>
  );
};
