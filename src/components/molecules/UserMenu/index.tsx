import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "src/interfaces/user.interfaces";
import { logoutUserRequest } from "src/services/actions/user.actions";
import { FaUser } from "react-icons/fa";
import styles from "./index.module.scss";
export interface UserMenuProps {
  user: User | null;
}
const UserMenu: FunctionComponent<UserMenuProps> = ({ user }: UserMenuProps) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p onClick={() => setToggle(!toggle)} className={styles.adminUser}>
        <FaUser size={20} />
        <span>{user?.username || "Usuario"}</span>
      </p>
      <div style={{ display: toggle ? "block" : "none" }}>
        <ul>
          <li>My account</li>
          <li>Visit store</li>
          <li onClick={() => dispatch(logoutUserRequest())}>Logout</li>
        </ul>
      </div>
    </div>
  );
};
export default UserMenu;
