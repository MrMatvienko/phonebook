import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginWraper, Title } from './Login.styled';

export default function Login() {
  return (
    <LoginWraper>
      <Title>Login please</Title>
      <LoginForm /> {/* Відображення форми для входу в систему */}
    </LoginWraper>
  );
}
