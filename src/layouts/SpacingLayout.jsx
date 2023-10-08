import layoutStyles from "../constants/styles/layoutStyles";

const SpacingLayout = ({ children, className, ...props }) => {
  return <div className={`${layoutStyles.paddingX} ${layoutStyles.flexCenter} ${className}`}>{children}</div>;
};

export default SpacingLayout;
