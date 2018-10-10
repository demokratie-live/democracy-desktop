import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { Carousel as AntCarousel } from 'antd';
import { Query } from 'react-apollo';

// Components
import PieChart from './charts/PieChart';
import PartyChart from './charts/PartyChart';
import BarChart from './charts/BarChart';
import ResultNumbers from './ResultNumbers';

// GraphQL
import COMMUNITY_VOTES from 'GraphQl/queries/communityVotes';

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  max-width: 100vw;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    & > *:first-of-type {
      padding-right: 15px;
    }

    & > *:last-of-type {
      padding-left: 15px;
    }
  }
`;

const GovernmentCharts = styled.div`
  width: 50%;
  max-width: 400px;
`;

const DecisionTextWrapper = styled.div`
  padding-top: ${({ theme }) => theme.space(2)}px;
  display: flex;
`;

const DecisionTextHeadline = styled.h4`
  padding-right: ${({ theme }) => theme.space(2)}px;
`;

const DecisionText = styled.p`
  flex: 1;
`;

const Chart = styled.div``;

const ChartTitle = styled.div`
  font-weight: bold;
  text-align: center;
`;

const ChartDescription = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

const Carousel = styled(AntCarousel)``;

const VoteResultsPanel = ({ voteResults, procedure }) => {
  const votes = voteResults.yes + voteResults.no + voteResults.notVoted + voteResults.abstination;
  const voteCount = voteResults.namedVote ? `${votes} Abgeordnete` : '6 Fraktionen';
  return (
    <Wrapper>
      <GovernmentCharts>
        <ChartTitle>Bundestag</ChartTitle>
        <ChartDescription>{voteCount}</ChartDescription>
        <Carousel arrows>
          <Chart style={{ paddingBottom: '30px' }}>
            <PieChart
              data={_.map(
                voteResults,
                (value, label) =>
                  label !== '__typename' && typeof value === 'number'
                    ? {
                        value,
                        label,
                        fractions: voteResults.namedVote
                          ? null
                          : voteResults.partyVotes.filter(
                              ({ main }) => label === main.toLowerCase(),
                            ).length,
                        percentage: Math.round((value / votes) * 100),
                      }
                    : false,
              ).filter(e => e)}
              colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
              label={voteResults.namedVote ? 'Abgeordnete' : 'Fraktionen'}
              voteResults={voteResults}
            />
          </Chart>
          <Chart>
            <PartyChart
              key="partyChart"
              data={_.map(voteResults.partyVotes, partyVotes => ({
                value: partyVotes.deviants,
                label: partyVotes.party,
              }))}
              colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
              label="Abgeordnete"
              voteResults={voteResults}
            />
          </Chart>
          <BarChart
            key="barChart"
            data={_.map(voteResults.partyVotes, partyVotes => ({
              value: partyVotes.deviants,
              label: partyVotes.party,
            }))}
            colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
            label="Abgeordnete"
            voteResults={voteResults}
          />
        </Carousel>
        <ResultNumbers
          voteResults={voteResults}
          colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
          data={_.map(voteResults.partyVotes, partyVotes => ({
            value: partyVotes.deviants,
            label: partyVotes.party,
          }))}
        />
        {voteResults.decisionText && (
          <DecisionTextWrapper>
            <DecisionTextHeadline>Beschlusstext:</DecisionTextHeadline>
            <DecisionText>{voteResults.decisionText}</DecisionText>
          </DecisionTextWrapper>
        )}
      </GovernmentCharts>
      <GovernmentCharts>
        <Chart>
          <Query
            query={COMMUNITY_VOTES}
            variables={{
              procedure,
            }}
          >
            {({ data }) => {
              if (!data.communityVotes) return <div />;
              const communityVoteCount =
                data.communityVotes.yes + data.communityVotes.abstination + data.communityVotes.no;

              return (
                <>
                  <ChartTitle>Community</ChartTitle>
                  <ChartDescription>{communityVoteCount} Abstimmende</ChartDescription>
                  <PieChart
                    data={_.map(
                      data.communityVotes,
                      (value, label) =>
                        label !== '__typename' && typeof value === 'number'
                          ? {
                              value,
                              label,
                              fractions: null,
                              percentage: Math.round((value / communityVoteCount) * 100),
                            }
                          : false,
                    ).filter(e => e)}
                    colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
                    label={'Abstimmende'}
                  />
                  <ResultNumbers
                    style={{ paddingTop: '37px' }}
                    colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
                    voteResults={{ namedVote: true }}
                    data={[{ value: data.communityVotes }]}
                  />
                </>
              );
            }}
          </Query>
        </Chart>
      </GovernmentCharts>
    </Wrapper>
  );
};

VoteResultsPanel.propTypes = {
  voteResults: PropTypes.shape().isRequired,
  procedure: PropTypes.string,
};

export default VoteResultsPanel;
