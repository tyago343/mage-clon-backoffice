import React, { FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "@Components/Input";
import { UserState } from "../../interfaces/user.interfaces";
import DashboardRoutes from "../../routes/Dashboard";
import { loginUserRequest } from "../../services/actions/user.actions";
import { RootState } from "../../services/reducers";
import "./styles.scss";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pending, user, error } = useSelector((state: RootState): UserState => state.user);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!pending) {
      const target: any = evt.target;
      const { password, username } = target.elements;
      dispatch(loginUserRequest({ password: password.value, username: username.value }));
    }
  };
  useEffect(() => {
    if (user?.id) {
      navigate(DashboardRoutes.INDEX);
    }
  }, [user, navigate]);
  return (
    <section className="section">
      <div className="login-page__wrapper">
        <p style={{ color: "#eb5202", fontSize: "2.6rem", fontWeight: "300", lineHeight: "1.2" }}>
          Welcome, please log in
        </p>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <p>{error}</p>
          <Input type="text" name="username" label="Username" id="username" required />
          <Input type="password" name="password" label="Password" id="password" required />
          <Button type="submit" className="primary">
            <span>Send</span>
          </Button>
        </form>
      </div>
        <span className="login-page__copyright">Copyright © 2022 Santiago Casanova. All rights reserved.</span>
    </section>
  );
};
export default Login;
