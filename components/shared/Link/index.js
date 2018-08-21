import Link from 'next/link';

export default ({ children, ...props }) => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);
