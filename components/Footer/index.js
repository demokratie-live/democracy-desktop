import { withRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'antd';

import Link from 'Components/shared/Link/primary';

const FooterElem = styled.footer`
  height: 80px;
  text-align: center;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  color: ${({ theme }) => theme.colors.link};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const Footer = props => {
  return (
    <FooterElem>
      <Link href="https://www.democracy-deutschland.de" target="_blank">
        DEMOCRACY Deutschland e.V.
      </Link>
      &nbsp; <Icon type="minus" /> &nbsp;
      <Link href="https://www.democracy-deutschland.de/#!impressum" target="_blank">
        Impressum
      </Link>
      &nbsp; <Icon type="minus" /> &nbsp;
      <Link href="https://www.democracy-deutschland.de/#!agbs" target="_blank">
        Nutzungsbedingungen
      </Link>
      &nbsp; <Icon type="minus" /> &nbsp;
      <Link href="https://www.democracy-deutschland.de/#!datenschutz" target="_blank">
        Datenschutz
      </Link>
    </FooterElem>
  );
};

export default withRouter(Footer);
