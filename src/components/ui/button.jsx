import PropTypes from "prop-types";

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-12 py-4 text-xl",
};

export function Button({ children, size = "md", className = "", ...props }) {
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const baseClasses =
    "flex bg-button items-center rounded-lg shadow-md transition-all hover:scale-110";

  return (
    <button className={`${baseClasses} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};

export default Button;
