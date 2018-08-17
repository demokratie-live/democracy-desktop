import Theme from '../ThemeProvider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
