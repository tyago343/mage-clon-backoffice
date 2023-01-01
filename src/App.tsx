import "./assets/styles/_global.scss";
import { useSelector } from "react-redux";
import { RootState } from "./services/reducers";
import { UserState } from "./interfaces/user.interfaces";
import AuthenticatedApp from "./authenticated-app";
import UnauthenticatedApp from "./unauthenticated-app";
function App() {
  const { user } = useSelector((state: RootState): UserState => state.user);
  return user?.id ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
