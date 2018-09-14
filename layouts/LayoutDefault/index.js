import Theme from '../ThemeProvider';
import Nav from 'Components/Nav';
import Footer from 'Components/Footer';

const LayoutDefault = ({ children }) => (
  <main id="top">
    <Theme>
      <>
        <Nav />
        {children}
        <Footer />
      </>
    </Theme>
  </main>
);

export default LayoutDefault;
