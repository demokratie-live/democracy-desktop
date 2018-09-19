import PropTypes from 'prop-types';
import speakingurl from 'speakingurl';
import styled from 'styled-components';

// Components
import { Card as CardComponent, Row } from 'antd';

import SubjectIcon from './../../shared/SubjectIcon';
import Ribbon from './Ribbon';
import Time from './Time';
import Link from 'Components/shared/Link';
import Title from 'Components/shared/Ellipsis';
import ActivityIndex from 'Components/shared/ActivityIndex';

// Helpers
import { getImage } from 'Helpers/subjectGroupToIcon';

const TitleRow = styled.div`
  display: flex;
  > h2 {
    flex: 1;
  }
`;

const SubjectGroups = styled.div`
  float: right;
  margin-top: ${({ theme }) => theme.space(5)}px;
  height: 100%;
  padding-right: ${({ theme }) => theme.space(1)}px;
`;

const Card = styled(CardComponent)``;

const ImageContainer = styled.div`
  display: block;
  height: 0;
  padding-bottom: 55%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

const Teaser = ({ title, procedureId, type, activityIndex, voteDate, subjectGroups }) => (
  <Link
    as={`/${type.toLowerCase()}/${procedureId}/${speakingurl(title)}`}
    href={`/details?id=${procedureId}&title=${speakingurl(title)}`}
  >
    <article>
      <Card
        hoverable
        cover={
          <>
            {voteDate && <Time>{voteDate}</Time>}
            <ImageContainer>
              <Image src={getImage(subjectGroups[0])} alt={subjectGroups[0]} />
            </ImageContainer>
          </>
        }
      >
        <TitleRow>
          <Title tag={'h2'} lines={2}>
            {title}
          </Title>
          <ActivityIndex>{activityIndex.activityIndex}</ActivityIndex>
        </TitleRow>

        <Row>
          <div style={{ display: 'flex' }}>
            <Ribbon>{type}</Ribbon>
            <SubjectGroups
              style={{
                display: 'flex',
                overflow: 'hidden',
                height: '40px',
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              <div>
                {subjectGroups.map(group => (
                  <SubjectIcon key={group} group={group} />
                ))}
              </div>
            </SubjectGroups>
          </div>
        </Row>
      </Card>
    </article>
  </Link>
);

Teaser.propTypes = {
  title: PropTypes.string.isRequired,
  procedureId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  activityIndex: PropTypes.shape().isRequired,
  voteDate: PropTypes.string,
  subjectGroups: PropTypes.array.isRequired,
};

export default Teaser;
