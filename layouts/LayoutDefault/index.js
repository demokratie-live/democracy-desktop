import Theme from '../ThemeProvider';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

export default ({ children }) => (
  <main>
    <Theme>
      <>
        <Header />
        {children}
        <Footer />
      </>
    </Theme>
  </main>
);
