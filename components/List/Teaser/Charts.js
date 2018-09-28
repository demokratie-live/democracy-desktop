import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

// Components
import PieChart from './PieChart';

const Wrapper = styled.div`
  width: 100%;
  padding-top: 30%; /* 1:1 Aspect Ratio */
  position: relative;
  margin-top: -20%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Chart = styled.div`
  width: 30%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
`;

const TeaserCharts = ({ voteResults }) => {
  const votes = voteResults.yes + voteResults.no + voteResults.notVoted + voteResults.abstination;
  return (
    <Wrapper>
      <Container>
        {(voteResults.yes > 0 || voteResults.no > 0) && (
          <Chart>
            <PieChart
              key="partyChart"
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
              label="Abgeordnete"
              voteResults={voteResults}
            />
          </Chart>
        )}
      </Container>
    </Wrapper>
  );
};

TeaserCharts.propTypes = {
  voteResults: PropTypes.shape().isRequired,
};

export default TeaserCharts;
