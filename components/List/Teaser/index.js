import PropTypes from 'prop-types';
import speakingurl from 'speakingurl';
import styled from 'styled-components';

// Components
import { Card as CardComponent } from 'antd';

import SubjectIcon from './../../shared/SubjectIcon';
import Ribbon from './Ribbon';
import Time from './Time';
import Charts from './Charts';
import Link from 'Components/shared/Link';
import Title from 'Components/shared/Ellipsis';
import ActivityIndex from 'Components/shared/ActivityIndex';
import DateTime from 'Components/shared/DateTime';

// Context
import { Consumer as FilterConsumer } from 'Context/filter';
import { Consumer as SearchConsumer } from 'Context/search';

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

const Teaser = ({
  title,
  procedureId,
  type,
  activityIndex,
  voteDate,
  subjectGroups,
  voteResults,
}) => (
  <SearchConsumer>
    {consumerProps => {
      if (!consumerProps) return null;
      const { changeSearchTerm } = consumerProps;
      return (
        <Link
          as={`/${type.toLowerCase()}/${procedureId}/${speakingurl(title)}`}
          href={`/details?id=${procedureId}&title=${speakingurl(title)}`}
          onClick={() => changeSearchTerm('')}
        >
          <article>
            <Card
              onClick={() => changeSearchTerm('')}
              hoverable
              cover={
                <>
                  {voteDate && (
                    <Time>
                      <DateTime colored date={voteDate} />
                    </Time>
                  )}
                  <ImageContainer>
                    <Image src={`${getImage(subjectGroups[0])}_640.jpg`} alt={subjectGroups[0]} />
                  </ImageContainer>
                  <Charts voteResults={voteResults} />
                </>
              }
            >
              <TitleRow>
                <Title tag={'h2'} lines={3}>
                  {title}
                </Title>
                <ActivityIndex>{activityIndex.activityIndex}</ActivityIndex>
              </TitleRow>

              <div style={{ display: 'flex' }}>
                <FilterConsumer>
                  {({ selectType }) => (
                    <Ribbon
                      onClick={e => {
                        e.preventDefault();
                        selectType(type);
                      }}
                    >
                      {type}
                    </Ribbon>
                  )}
                </FilterConsumer>
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
                    <FilterConsumer>
                      {({ selectSubjectGroup }) => {
                        return subjectGroups.map(group => (
                          <SubjectIcon
                            key={group}
                            group={group}
                            onClick={e => {
                              e.preventDefault();
                              selectSubjectGroup(group);
                            }}
                          />
                        ));
                      }}
                    </FilterConsumer>
                  </div>
                </SubjectGroups>
              </div>
            </Card>
          </article>
        </Link>
      );
    }}
  </SearchConsumer>
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
