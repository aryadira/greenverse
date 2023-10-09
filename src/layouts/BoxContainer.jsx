import { styles } from "../constants/styles/layoutStyles";

const BoxContainer = ({ children, className, ...props }) => {
  return <div className={`w-full ${styles.boxWidth} ${className}`}>{children}</div>;
};

export default BoxContainer;
