import { withRouter } from 'next/router';
import styled, { withTheme } from 'styled-components';

import { H1, H2 } from '../shared/Headlines';

const Footer = props => {
  return (
    <footer>
      <H1>Footer</H1>
      <H2>Footer h2</H2>
      {/*<linkX>DEMOCRACY Deutschland e.V.</linkX>
      <hyphen />
      <linkX>Impressum</linkX>
      <hyphen />
      <linkX>Nutzungsbedingungen</linkX>
      <hyphen />
      <linkX>Datenschutz</linkX> */}
    </footer>
  );
};

export default withRouter(Footer);
