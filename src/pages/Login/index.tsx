import React from "react";
import Button from "../../components/Button";
const Login = () => {
  const handleSubmit = () => {

  };
  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
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
