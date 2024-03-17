import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Form } from "../../components/ui/FormStyles";

function Login() {
  const { register, handleSubmit } = useForm();

  const onLogin = () => {};

  return (
    <Form onSubmit={handleSubmit(onLogin)}>
      <H1>
        <img src="/logo.svg" alt="logo" />
        ДЕБИЛГРАММ
      </H1>
      <h2 className="form__title">Войдите в свою учётную запись</h2>

      <p className="form__subtitle">
        Добро пожаловать! Пожалуйста, введите свои данные.
      </p>

      <div className="form__wrapper">
        <label className="form__label">Имя</label>
        <input type="text" {...register("name")} className="form__input" />
      </div>

      <div className="form__wrapper">
        <label className="form__label">Пароль</label>
        <input
          type="password"
          {...register("password")}
          className="form__input"
        />
      </div>

      <button className="form__button" type="submit">
        Войти
      </button>
      <p className="form__link">
        У вас нет учетной записи?{" "}
        <Link to="/signup" className="form__link--violet">
          Создать
        </Link>
      </p>
    </Form>
  );
}

const H1 = styled.h1`
  display: flex;
  column-gap: 35px;
  color: var(--violet-color);
  font-size: 50px;
`;

export default Login;
