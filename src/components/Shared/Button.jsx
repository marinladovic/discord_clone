import PropTypes from 'prop-types';

function Button({ children, link, version }) {
  const baseUrl = 'http://localhost:3000';

  return (
    <a href={`${baseUrl}/${link}`} className={`btn btn-${version}`}>
      {children}
    </a>
  );
}

Button.defaultProps = {
  link: '',
  version: 'primary__small',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  version: PropTypes.string,
};

export default Button;
