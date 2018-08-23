import { withRouter } from 'next/router';
import { Row, Col, Menu, Icon, Collapse } from 'antd';
import styled from 'styled-components';

import { H1 } from 'Components/shared/Headlines';
import Dev from 'Components/shared/Dev';

const SubMenu = Menu.SubMenu;
const PanelComponent = Collapse.Panel;

const Section = styled.section`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding-top: ${({ theme }) => theme.space(3)}px;
`;

const ContentSection = styled.section`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding-left: ${({ theme }) => theme.space(3)}px;
  padding-right: ${({ theme }) => theme.space(3)}px;
`;

const ASide = styled.aside`
  padding-top: ${({ theme }) => theme.space(3)}px;
`;

const WhiteCol = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
})`
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;

const WhiteColPad = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
})`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  margin-top: ${({ theme }) => theme.space(3)}px;
  margin-bottom: ${({ theme }) => theme.space(4)}px;
`;

const GrayCol = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
})`
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.default};
  padding-top: ${({ theme }) => theme.space(2)}px;
  padding-bottom: ${({ theme }) => theme.space(2)}px;
  padding-left: ${({ theme }) => theme.space(4)}px;
  padding-right: ${({ theme }) => theme.space(4)}px;
`;

const Panel = styled(PanelComponent)`
  font-size: ${({ theme }) => theme.fontSizes.default};
  padding: 0;

  .ant-collapse-header {
    font-weight: bold;
    border-radius: 0;
    background-color: ${({ theme }) => theme.backgrounds.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    padding-left: ${({ theme }) => theme.space(4)}px !important;
    padding-right: ${({ theme }) => theme.space(4)}px !important;

    .arrow {
      right: 16px;
      color: ${({ theme }) => theme.colors.arrow};
      font-size: ${({ theme }) => theme.fontSizes.small} !important;
    }
  }

  .ant-collapse-header .arrow {
    transform: rotate(90deg) !important;
  }

  .ant-collapse-header[aria-expanded='true'] .arrow {
    transform: rotate(-90deg) !important;
  }

  .ant-collapse-content {
    .ant-collapse-content-box {
      padding-left: ${({ theme }) => theme.space(4)}px;
      padding-right: ${({ theme }) => theme.space(4)}px;
    }
  }
`;

const Overview = styled.div`
  padding-left: ${({ theme }) => theme.space(4)}px;
  padding-right: ${({ theme }) => theme.space(4)}px;
`;

const Details = ({ router: { pathname, query } }) => (
  <Section>
    <Row>
      <Dev>
        <Col xs={24} sm={24} md={24} lg={3}>
          <Dev>
            <ASide>##Facebook ##Twitter ##EMail</ASide>
          </Dev>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18}>
          <ContentSection>
            <Row>
              <WhiteCol>
                <img
                  alt="example"
                  src="https://www.bundestag.de/image/558288/16x9/750/422/aefcd3415c9e921d4405f2e346d8bc73/UM/kw26_pa_gesundheit_cannabis_bild.jpg"
                  width="100%"
                />
                <Overview>
                  ##UN Binding Treaty ambitioniert unterstützen ##ImgActivity ##3567
                  <Icon type="tool" />
                  <Icon type="tool" />
                  ##Abgelehnt ##05.07.18 ##Internationales
                </Overview>
              </WhiteCol>
              <GrayCol>
                ##Internationales Abkommen, Menschenrechte, Menschenrechtsrat der Vereinten
                Nationen, Multinationales Unternehmen, Produktion, Unternehmensethik, Verhaltenskodex
              </GrayCol>
              <WhiteCol>
                <Collapse
                  defaultActiveKey={['details', 'documents', 'status', 'results']}
                  onChange={key => console.log(key)}
                  bordered={false}
                >
                  <Panel header="Details" key="details">
                    ##Sachgebiet Wirtschaft Recht ##Typ Antrag ##Vorgang 232645 ##erstellt am 28.02.18
                    ##Abstimmung 05.07.18 ##Aktueller Stand Abgelehnt ##Inhalt ##Gerechtigkeit und
                    Verantwortung in weltweiten Produktionsketten und Lieferketten durch Abschluss
                    eines internationalen Abkommens zur Sanktionierung von
                    Menschenrechtsverstößen: aktive Beteiligung am Beratungsprozess, Sicherstellung
                    finanzieller und personeller Ressourcen der UN-Arbeitsgruppe und Beteiligung der
                    Zivilgesellschaft, Unterstützung auf EU-Ebene
                  </Panel>
                  <Panel header="Dokumente" key="documents">
                    <Icon type="tool" /> ##Antrag (BT 19/978)
                    <Icon type="tool" /> ##Beschlussempfehlung und Bericht (BT 19/2117)
                  </Panel>
                  <Panel header="Gesetzesstand" key="status">
                    ##1. Lesung ##Überwiesen ##Beschlussempfehlung liegt vor ##2. Lesung ##Abgelehnt
                  </Panel>
                  <Panel header="Ergebnisse" key="results">
                    ##PiechartBundestag ##PiechartCommunity
                  </Panel>
                </Collapse>
              </WhiteCol>
              <WhiteColPad>
                <Collapse defaultActiveKey={['vote']} onChange={key => console.log(key)} bordered={false}>
                  <Panel header="AppStimmen" key="vote">
                    <Icon type="tool" />
                    <Icon type="tool" />
                    <Icon type="tool" />
                    ##Um mitzustimmen, lade Dir bitte das 10X-Improvement für unsere Demokratie
                    herunter
                    <Icon type="tool" />
                    <Icon type="tool" />
                  </Panel>
                </Collapse>
              </WhiteColPad>
            </Row>
          </ContentSection>
        </Col>
        <Col xs={24} sm={24} md={24} lg={3}>
          <ASide>
            <Menu
              onClick={data => console.log(data)}
              defaultSelectedKeys={['antrag']}
              defaultOpenKeys={['antrag']}
              mode="inline"
            >
              <SubMenu key="antrag" title={<span>##1. Antrag - 232645</span>}>
                <Menu.Item key="details">Details</Menu.Item>
                <Menu.Item key="documents">Dokumente</Menu.Item>
                <Menu.Item key="status">Gesetzesstand</Menu.Item>
                <Menu.Item key="results">Ergebnisse</Menu.Item>
              </SubMenu>
              <SubMenu key="vote" title="2. AppStimmen" />
            </Menu>
          </ASide>
        </Col>
      </Dev>
    </Row>
  </Section>
);

export default withRouter(Details);
