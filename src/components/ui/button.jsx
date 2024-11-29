import propTypes from "prop-types";

export function Button({ children }) {
  return (
    <button className="bg-button flex items-center rounded-lg px-4 py-2 shadow-md transition-all hover:scale-110">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.node.isRequired,
};
