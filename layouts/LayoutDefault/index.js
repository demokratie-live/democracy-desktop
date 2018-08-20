import Theme from '../ThemeProvider';
import Nav from 'Components/Nav';
import Footer from 'Components/Footer';

export default ({ children }) => (
  <main>
    <Theme>
      <>
        <Nav />
        {children}
        <Footer />
      </>
    </Theme>
  </main>
);
