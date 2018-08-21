import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  &:active {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  &:visited {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
`;

const PrimaryLink = ({ children, href, external }) => (
  <Link href={href} passHref>
    <A target={external ? '_blank' : '_self'}>{children}</A>
  </Link>
);

PrimaryLink.displayName = 'PrimaryLink';

PrimaryLink.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

PrimaryLink.defaultProps = {
  external: false,
};

export default PrimaryLink;
