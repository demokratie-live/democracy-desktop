import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const getColor = ({ theme, secondary }) => {
  if (secondary) {
    return theme.colors.default;
  } else {
    return theme.colors.link;
  }
};

const A = styled.a`
  color: ${getColor};
  text-decoration: none;
  &:hover {
    color: ${getColor};
    text-decoration: none;
  }
  &:active {
    color: ${getColor};
    text-decoration: none;
  }
  &:visited {
    color: ${getColor};
    text-decoration: none;
  }
  &:focus {
    color: ${getColor};
    text-decoration: none;
  }
`;

const PrimaryLink = ({ children, href, external, primary, secondary }) => (
  <Link href={href} passHref>
    <A target={external ? '_blank' : '_self'} primary={primary} secondary={secondary}>
      {children}
    </A>
  </Link>
);

PrimaryLink.displayName = 'PrimaryLink';

PrimaryLink.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

PrimaryLink.defaultProps = {
  external: false,
  primary: true,
  secondary: false,
};

export default PrimaryLink;
