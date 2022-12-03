import styles from "./index.module.scss";

export interface ToggleProps {
  name: string;
  disabled?: boolean;
  defaultValue?: boolean;
  label?: string;
  id?: string;
}

const Toggle: React.FunctionComponent<ToggleProps> = ({
  name,
  label,
  disabled,
  defaultValue,
  id,
}) => {
  return (
    <div className={styles.toggle}>
      <input
        className={styles.toggle__input}
        type="checkbox"
        name={name}
        disabled={disabled}
        id={id}
      />
      <label htmlFor={id} className={styles.toggle__label}>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Toggle;
