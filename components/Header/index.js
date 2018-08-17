import { withRouter } from 'next/router';

const Header = ({ router: { pathname } }) => <header />;

export default withRouter(Header);
