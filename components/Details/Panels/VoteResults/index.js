import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { Carousel as AntCarousel } from 'antd';

// Components
import PieChart from './charts/PieChart';
import PartyChart from './charts/PartyChart';
import BarChart from './charts/BarChart';
import ResultNumbers from './ResultNumbers';

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  max-width: 100vw;
`;

const Charts = styled.div`
  display: flex;
  flex-direction: row;
  & > *:not(:first-child) {
    margin-top: ${({ theme }) => theme.space(3)}px;
  }
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    flex-direction: row;
    & > *:not(:first-child) {
      margin-top: 0;
    }
  }
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

const GovernmentCharts = styled.div`
  width: 85%;
  max-width: 400px;
`;

const Chart = styled.div`
  padding-bottom: 30px;
`;

const Carousel = styled(AntCarousel)``;

const VoteResultsPanel = ({ voteResults }) => {
  const votes = voteResults.yes + voteResults.no + voteResults.notVoted + voteResults.abstination;
  return (
    <Wrapper>
      <GovernmentCharts>
        <Carousel arrows>
          <Chart>
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
        {voteResults.decisionText && (
          <DecisionTextWrapper>
            <DecisionTextHeadline>Beschlusstext:</DecisionTextHeadline>
            <DecisionText>{voteResults.decisionText}</DecisionText>
          </DecisionTextWrapper>
        )}
        <ResultNumbers
          voteResults={voteResults}
          colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
          data={_.map(voteResults.partyVotes, partyVotes => ({
            value: partyVotes.deviants,
            label: partyVotes.party,
          }))}
        />
      </GovernmentCharts>
      {/* <Charts>
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
                      : voteResults.partyVotes.filter(({ main }) => label === main.toLowerCase())
                          .length,
                    percentage: Math.round((value / votes) * 100),
                  }
                : false,
          ).filter(e => e)}
          colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
          label={voteResults.namedVote ? 'Abgeordnete' : 'Fraktionen'}
          voteResults={voteResults}
        />

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
      </Charts>
      {voteResults.decisionText && (
        <DecisionTextWrapper>
          <DecisionTextHeadline>Beschlusstext:</DecisionTextHeadline>
          <DecisionText>{voteResults.decisionText}</DecisionText>
        </DecisionTextWrapper>
      )}
      <ResultNumbers
        voteResults={voteResults}
        colorScale={['#99C93E', '#4CB0D8', '#D43194', '#B1B3B4']}
        data={_.map(voteResults.partyVotes, partyVotes => ({
          value: partyVotes.deviants,
          label: partyVotes.party,
        }))}
      /> */}
    </Wrapper>
  );
};

VoteResultsPanel.propTypes = {
  voteResults: PropTypes.shape().isRequired,
};

export default VoteResultsPanel;
