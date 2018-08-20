import { withRouter } from 'next/router';
import { Row, Col, Menu, Icon, Collapse } from 'antd';

import { H1 } from 'Components/shared/Headlines';
import Dev from 'Components/shared/Dev';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Panel = Collapse.Panel;

const Details = ({ router: { pathname, query } }) => (
  <Row>
    <Dev>
      <Col xs={24} sm={24} md={24} lg={3}>
        <aside>##Facebook ##Twitter ##EMail</aside>
      </Col>
      <Col xs={24} sm={24} md={24} lg={18}>
        <detail>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <img
                alt="example"
                src="https://www.bundestag.de/image/558288/16x9/750/422/aefcd3415c9e921d4405f2e346d8bc73/UM/kw26_pa_gesundheit_cannabis_bild.jpg"
                width="100%"
              />
              ##UN Binding Treaty ambitioniert unterstützen ##ImgActivity ##3567
              <Icon type="tool" />
              <Icon type="tool" />
              ##Abgelehnt ##05.07.18 ##Internationales
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
              ##Internationales Abkommen, Menschenrechte, Menschenrechtsrat der Vereinten
              Nationen, Multinationales Unternehmen, Produktion, Unternehmensethik, Verhaltenskodex
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Collapse
                defaultActiveKey={['details', 'documents', 'status', 'results']}
                onChange={key => console.log(key)}
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
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Collapse defaultActiveKey={['vote']} onChange={key => console.log(key)}>
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
            </Col>
          </Row>
        </detail>
      </Col>
      <Col xs={24} sm={24} md={24} lg={3}>
        <aside>
          <Menu
            onClick={data => console.log(data)}
            defaultSelectedKeys={['antrag']}
            defaultOpenKeys={['antrag']}
            mode="inline"
          >
            <SubMenu key="antrag" title={<span>##1. Antrag - 232645</span>}>
              <Menu.Item key="details">##Details</Menu.Item>
              <Menu.Item key="documents">##Dokumente</Menu.Item>
              <Menu.Item key="status">##Gesetzesstand</Menu.Item>
              <Menu.Item key="results">##Ergebnisse</Menu.Item>
            </SubMenu>
            <SubMenu key="vote" title="##2. AppStimmen" />
          </Menu>
        </aside>
      </Col>
    </Dev>
  </Row>
);

export default withRouter(Details);
