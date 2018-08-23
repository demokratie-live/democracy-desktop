import { withRouter } from 'next/router';
import { Row, Col, Menu, Icon, Collapse } from 'antd';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import Dev from 'Components/shared/Dev';
import ActivityIndex from 'Components/shared/ActivityIndex';
import Demicon from 'Components/shared/Demicon';
import Link from 'Components/shared/Link';

// GraphQL
import PROCEDURE from 'GraphQl/queries/procedure';

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

  .ant-collapse-item {
    border: 0 !important;
  }

  .ant-collapse-header {
    font-weight: bold;
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    background-color: ${({ theme }) => theme.backgrounds.primary};
    padding-left: ${({ theme }) => theme.space(4)}px !important;
    padding-right: ${({ theme }) => theme.space(4)}px !important;

    .arrow {
      right: 16px;
      left: auto !important;
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
      padding-bottom: ${({ theme }) => theme.space(4)}px;
      padding-top: ${({ theme }) => theme.space(1.5)}px !important;
    }
  }
`;

const Overview = styled.div`
  padding-left: ${({ theme }) => theme.space(4)}px;
  padding-right: ${({ theme }) => theme.space(4)}px;
  padding-top: ${({ theme }) => theme.space(5)}px;
  padding-bottom: ${({ theme }) => theme.space(4)}px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const SubjectGroups = styled.div`
  padding-top: ${({ theme }) => theme.space(2)}px;
  height: 100%;
`;

const DetailHead = styled.text`
  color: ${({ theme }) => theme.colors.highlight};
`;

const P = styled.p`
  margin-bottom: ${({ theme }) => theme.space(0.5)}px;
  font-size: ${({ theme }) => theme.fontSizes.default};
`;

const subjectGroups = groups => {
  return groups.map((item, i) => {
    return <P key={i}>{item}</P>;
  });
};

const ColDetail = styled(Col).attrs({
  xs: 24,
  sm: 24,
  lg: 18,
})`
  text-align: right;
  padding-right: ${({ theme }) => theme.space(2)}px;
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
`;

const Details = ({ router: { pathname, query } }) => (
  <Section>
    {/* Query is empty in first call... */}
    <Query query={PROCEDURE} variables={{ id: query.id }}>
      {({ loading, error, data: { procedure } }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log(procedure);
        return (
          <Row>
            <Col xs={24} sm={24} md={24} lg={4}>
              <Dev>
                <ASide>##Facebook ##Twitter ##EMail</ASide>
              </Dev>
            </Col>
            <Col xs={24} sm={24} md={24} lg={16}>
              <ContentSection>
                <Row>
                  <WhiteCol>
                    <Dev>
                      <img
                        alt="example"
                        src="https://www.bundestag.de/image/558288/16x9/750/422/aefcd3415c9e921d4405f2e346d8bc73/UM/kw26_pa_gesundheit_cannabis_bild.jpg"
                        width="100%"
                      />
                    </Dev>
                    <Overview>
                      <Row>
                        <Col xs={24} sm={24} lg={22}>
                          <Title>{procedure.title}</Title>
                        </Col>
                        <Col xs={24} sm={24} lg={2}>
                          <ActivityIndex>{procedure.activityIndex.activityIndex}</ActivityIndex>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} sm={24} lg={22}>
                          <Dev>
                            <SubjectGroups>
                              {procedure.subjectGroups.map(group => (
                                <Demicon type={group} tooltip={group} />
                              ))}
                            </SubjectGroups>
                          </Dev>
                        </Col>
                        <Col xs={24} sm={24} lg={2}>
                          <Dev>
                            {procedure.voteDate}
                          </Dev>
                        </Col>
                      </Row>
                    </Overview>
                  </WhiteCol>
                  <GrayCol>{procedure.tags.join(', ')}</GrayCol>
                  <WhiteCol>
                    <Collapse
                      defaultActiveKey={['details', 'documents', 'status', 'results']}
                      bordered={false}
                    >
                      <Panel header="Details" key="details">
                        <Row>
                          <Col xs={24} sm={24} lg={12}>
                            <DetailHead>Sachgebiete</DetailHead>
                            <br />
                            {subjectGroups(procedure.subjectGroups)}
                            <br />
                            <DetailHead>Aktueller Stand</DetailHead>
                            <br />
                            {procedure.currentStatus}
                            <br />
                            <br />
                          </Col>
                          <Col xs={24} sm={24} lg={12}>
                            <Row>
                              <ColDetail>
                                <DetailHead>Typ</DetailHead>
                              </ColDetail>
                              <Col xs={24} sm={24} lg={6}>
                                {procedure.type}
                              </Col>
                            </Row>
                            <Row>
                              <ColDetail>
                                <DetailHead>Vorgang</DetailHead>
                              </ColDetail>
                              <Col xs={24} sm={24} lg={6}>
                                {procedure.procedureId}
                              </Col>
                            </Row>
                            <Row>
                              <ColDetail>
                                <DetailHead>erstellt am</DetailHead>
                              </ColDetail>
                              <Col xs={24} sm={24} lg={6}>
                              {procedure.submissionDate}
                              </Col>
                            </Row>
                            <Row>
                              <ColDetail>
                                <DetailHead>Abstimmung</DetailHead>
                              </ColDetail>
                              <Col xs={24} sm={24} lg={6}>
                                {procedure.voteDate ? procedure.voteDate : 'N/A'}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={24} sm={24} lg={24}>
                            <DetailHead>Inhalt</DetailHead>
                            <br />
                            {procedure.abstract}
                          </Col>
                        </Row>
                      </Panel>
                      <Panel header="Dokumente" key="documents">
                        {procedure.importantDocuments.map(({ editor, type, url, number }, i) => (
                          <div key={i}>
                            <Icon type="file-text" />
                            &nbsp;&nbsp;
                            <Link href={url} external primary>
                              {`${type} (${editor} ${number})`}
                            </Link>
                          </div>
                        ))}
                      </Panel>
                      <Panel header="Gesetzesstand" key="status">
                        <Dev>
                          {procedure.currentStatusHistory.map((status, i) => (
                            <div key={i}>
                              <Icon type="check-circle" />
                              &nbsp;&nbsp;
                              {status}
                            </div>
                          ))}
                        </Dev>
                      </Panel>
                      <Panel header="Ergebnisse" key="results">
                        <Dev>
                          ##PiechartBundestag ##PiechartCommunity
                        </Dev>
                      </Panel>
                    </Collapse>
                  </WhiteCol>
                  <WhiteColPad>
                    <Dev>
                      <Collapse defaultActiveKey={['vote']} onChange={key => console.log(key)} bordered={false}>
                        <Panel header="AppStimmen" key="vote">
                          <Icon type="tool" />
                          <Icon type="tool" />
                          <Icon type="tool" />
                          <H3>
                            Um mitzustimmen, lade Dir bitte das <b>10X-Improvement</b>
                            <br />
                            <Link href="https://www.democracy-deutschland.de/" external primary>
                              für unsere Demokratie
                            </Link>
                            &nbsp;herunter
                          </H3>
                          <Icon type="tool" />
                          <Icon type="tool" />
                        </Panel>
                      </Collapse>
                    </Dev>
                  </WhiteColPad>
                </Row>
              </ContentSection>
            </Col>
            <Col xs={24} sm={24} md={24} lg={4}>
              <ASide>
                <Dev>
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
                </Dev>
              </ASide>
            </Col>
          </Row>
        );
      }}
    </Query>
  </Section>
);

export default withRouter(Details);
