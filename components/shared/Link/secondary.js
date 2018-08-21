import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
  color: ${({ theme }) => theme.colors.default};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.default};
    text-decoration: none;
  }
  &:active {
    color: ${({ theme }) => theme.colors.default};
    text-decoration: none;
  }
  &:visited {
    color: ${({ theme }) => theme.colors.default};
    text-decoration: none;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.default};
    text-decoration: none;
  }
`;

export default ({ children, ...props }) => (
  <Link {...props}>
    <A {...props}>{children}</A>
  </Link>
);