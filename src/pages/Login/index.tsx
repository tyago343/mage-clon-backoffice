import React, { FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { loginUserRequest } from "../../services/actions/user.actions";
import { RootState } from "../../services/reducers";
const Login = () => {
  const dispatch = useDispatch();
  const { pending, user, error } = useSelector((state: RootState) => state.user);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const target: any = evt.target;
    const { password, username } = target.elements;
    dispatch(loginUserRequest({ password: password.value, username: username.value }));
  };
  useEffect(() => {
  }, [user]);
  return (
    <section>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <p></p>
          <input type="text" name="username" id="username" />
          <input type="password" name="password" id="password" />
          <Button type="submit" cssClasses="primary">
            <span>Send</span>
          </Button>
        </form>
      </div>
    </section>
  );
};
export default Login;
