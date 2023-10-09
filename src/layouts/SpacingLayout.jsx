import { styles } from "../constants/styles/layoutStyles";

const SpacingLayout = ({ children, className, ...props }) => {
  return <div className={`${styles.paddingX} ${styles.flexCenter} ${className}`}>{children}</div>;
};

export default SpacingLayout;
