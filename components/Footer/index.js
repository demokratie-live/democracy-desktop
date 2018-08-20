import { withRouter } from 'next/router';
import styled, { withTheme } from 'styled-components';
import { Icon } from 'antd';

import Dev from 'Components/shared/Dev';

const Footer = props => {
  return (
    <footer>
      <Dev>
        ##Link DEMOCRACY Deutschland e.V.
        <Icon type="minus" />
        ##Link Impressum
        <Icon type="minus" />
        ##Link Nutzungsbedingungen
        <Icon type="minus" />
        ##Link Datenschutz
      </Dev>
    </footer>
  );
};

export default withRouter(Footer);
