import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Title from 'Components/shared/Ellipsis';
import ActivityIndex from 'Components/shared/ActivityIndex';
import DateTime from 'Components/shared/DateTime';
import SubjectIcon from './../shared/SubjectIcon';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.space(1)}px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    padding: ${({ theme }) => theme.space(3)}px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  > h2 {
    flex: 1;
  }
`;

const SubjectGroups = styled.div`
  padding-top: ${({ theme }) => theme.space(2)}px;
  height: 100%;
`;

const Overview = ({ title, activityIndex, subjectGroups, voteDate, currentStatus }) => (
  <Wrapper>
    <TitleRow>
      <Title tag={'h2'} lines={3}>
        {title}
      </Title>
      <ActivityIndex>{activityIndex}</ActivityIndex>
    </TitleRow>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <SubjectGroups
        style={{
          display: 'flex',
          overflow: 'hidden',
          height: '60px',
          flex: 1,
          justifyContent: 'flex-start',
        }}
      >
        <div>
          {subjectGroups.map(group => (
            <SubjectIcon
              key={group}
              group={group}
              style={{ marginRight: '6px', marginLeft: '0' }}
            />
          ))}
          {currentStatus}
        </div>
      </SubjectGroups>
      <DateTime
        date={voteDate}
        style={{
          color: 'rgb(254,56,36)',
          fontSize: '20px',
        }}
      />
    </div>
  </Wrapper>
);

Overview.propTypes = {
  title: PropTypes.string.isRequired,
  activityIndex: PropTypes.number.isRequired,
  subjectGroups: PropTypes.array.isRequired,
  voteDate: PropTypes.string.isRequired,
};

export default Overview;
