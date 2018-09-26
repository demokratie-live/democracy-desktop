import Theme from '../ThemeProvider';
import Nav from 'Components/Nav';
import Footer from 'Components/Footer';

import '../../assets/styles/styles.less';

const LayoutDefault = ({ children, stickyFooter, page }) => (
  <main id="top">
    <Theme>
      <>
        <Nav page={page} />
        {children}
        <Footer stickyFooter={stickyFooter} />
      </>
    </Theme>
  </main>
);

export default LayoutDefault;
