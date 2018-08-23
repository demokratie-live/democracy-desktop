import PropTypes from 'prop-types';
import speakingurl from 'speakingurl';
import styled from 'styled-components';

// Components
import { Card as CardComponent, Row, Col } from 'antd';

import SubjectIcon from './SubjectIcon';
import Ribbon from './Ribbon';
import Time from './Time';
import Dev from 'Components/shared/Dev';
import Link from 'Components/shared/Link';
import Title from 'Components/shared/Ellipsis';
import ActivityIndex from 'Components/shared/ActivityIndex';

const SubjectGroups = styled.div`
  float: right;
  margin-top: ${({ theme }) => theme.space(5)}px;
  height: 100%;
  padding-right: ${({ theme }) => theme.space(1)}px;
`;

const Card = styled(CardComponent)``;

const Teaser = ({ title, procedureId, type, activityIndex, voteDate, subjectGroups }) => (
  <Link href={`/${type.toLowerCase()}/${procedureId}/${speakingurl(title)}`}>
    <article>
      <Card
        hoverable
        cover={
          <>
            <Time>{voteDate ? voteDate : 'N/A'}</Time>
            <Dev>
              <img
                alt="example"
                src="https://www.bundestag.de/image/558288/16x9/750/422/aefcd3415c9e921d4405f2e346d8bc73/UM/kw26_pa_gesundheit_cannabis_bild.jpg"
                width="100%"
              />
            </Dev>
          </>
        }
      >
        <Row>
          <Col xs={24} sm={24} lg={20}>
            <Title tag={'h2'} lines={2}>
              {title}
            </Title>
          </Col>
          <Col xs={24} sm={24} lg={4}>
            <ActivityIndex>{activityIndex.activityIndex}</ActivityIndex>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} lg={24}>
            <Ribbon>{type}</Ribbon>
            <SubjectGroups>
              {subjectGroups.map(group => (
                <SubjectIcon key={group} group={group} />
              ))}
            </SubjectGroups>
          </Col>
        </Row>
      </Card>
    </article>
  </Link>
);

Teaser.propTypes = {
  title: PropTypes.string.isRequired,
  procedureId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  activityIndex: PropTypes.number.isRequired,
  voteDate: PropTypes.string,
  subjectGroups: PropTypes.string.isRequired,
};

export default Teaser;
