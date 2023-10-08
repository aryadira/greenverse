import layoutStyles from "../constants/styles/layoutStyles";

const BoxContainer = ({ children, className, ...props }) => {
  return <div className={`w-full ${layoutStyles.boxWidth} ${className}`}>{children}</div>;
};

export default BoxContainer;
