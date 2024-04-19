import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operations';
import { Button, Form, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Викликаємо дію logIn з параметрами email та password, які отримуємо зі значень полів форми
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset(); // Очищуємо значення полів форми після відправки
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Будь ласка, введіть дійсну адресу електронної пошти"
          required
        />
      </Label>
      <Label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          // pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
          required
        />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};
