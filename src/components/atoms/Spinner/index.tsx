import { FcSynchronize } from "react-icons/fc";
import "./styles.scss"
export interface SpinnerProps {
  active: boolean;
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ active }) => {
  return active ? (
    <div className="spinner-container">
      <FcSynchronize size="100" className="spinner" />
    </div>
  ) : null;
}
export default Spinner;