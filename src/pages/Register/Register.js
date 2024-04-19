import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterWraper, Title } from './Register.styled';

export default function Register() {
  return (
    <RegisterWraper>
      <Title>Registration</Title>
      <RegisterForm /> {/* Відображення форми для реєстрації */}
    </RegisterWraper>
  );
}
