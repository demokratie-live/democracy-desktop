import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryBar, VictoryStack, VictoryAxis, VictoryLabel } from 'victory';

const VoteResultsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const VoteResultsPieWrapper = styled.div.attrs({
  pointerEvents: 'none',
})``;

const VoteResultNumbers = styled.div`
  display: flex;
  max-width: 464px;
  padding-top: 18px;
  flex-direction: row;
  justify-content: space-around;
`;

const VoteResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VoteResultCircleNumber = styled.div`
  display: flex;
  flex-direction: row;
`;

const VoteResultNumber = styled.span`
  color: #4a4a4a;
  font-size: 12px;
`;
const VoteResultLabel = styled.span`
  color: #d5d5d5;
  font-size: 10px;
`;

const VoteResultCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.color};
  margin-top: 3px;
  margin-right: 5px;
`;

class BarChart extends Component {
  getColor = (label, colors) => {
    switch (label) {
      case 'yes':
        return colors[0];
      case 'abstination':
        return colors[1];
      case 'no':
        return colors[2];
      default:
        return colors[3];
    }
  };

  getLabel = label => {
    const labels = {
      yes: 'Zustimmungen',
      abstination: 'Enthaltungen',
      no: 'Ablehnungen',
      notVoted: 'Nicht abg.',
    };
    return labels[label] || label;
  };

  getPartyColor = party => {
    switch (party) {
      case 'CDU/CSU':
      case 'Union':
        return '#4b4b4b';
      case 'SPD':
        return '#ed170d';
      case 'AfD':
      case 'AFD':
        return '#18a7d8';
      case 'FDP':
        return '#ffd32c';
      case 'Die Linke':
      case 'Linke':
        return '#aa4581';
      case 'B90/Grüne':
      case 'Grüne':
        return '#34ac14';
      default:
        return 'grey';
    }
  };

  getTotals = data => {
    const {
      voteResults: { namedVote },
    } = this.props;
    const totals = data.reduce(
      (prev, party) => {
        const { yes, abstination, no, notVoted } = party.value;
        if (namedVote) {
          return {
            yes: prev.yes + yes,
            abstination: prev.abstination + abstination,
            no: prev.no + no,
            notVoted: prev.notVoted + notVoted,
          };
        }
        return {
          yes: prev.yes + (yes === Math.max(yes, abstination, no, notVoted) ? 1 : 0),
          abstination:
            prev.abstination + (abstination === Math.max(yes, abstination, no, notVoted) ? 1 : 0),
          no: prev.no + (no === Math.max(yes, abstination, no, notVoted) ? 1 : 0),
          notVoted: prev.notVoted + (notVoted === Math.max(yes, abstination, no, notVoted) ? 1 : 0),
        };
      },
      { yes: 0, abstination: 0, no: 0, notVoted: 0 },
    );
    const totalsResult = [
      {
        label: 'yes',
        value: totals.yes,
      },
      {
        label: 'abstination',
        value: totals.abstination,
      },
      {
        label: 'no',
        value: totals.no,
      },
    ];
    if (totals.notVoted) {
      totalsResult.push({
        label: 'notVoted',
        value: totals.notVoted,
      });
    }

    return totalsResult;
  };

  prepareChartData = data => {
    const chartData = data.map(party => {
      const { yes, abstination, no, notVoted } = party.value;
      const result = [
        {
          x: 'Zustimmungen',
          y: yes,
          fillColor: this.getPartyColor(party.label),
          party: party.label,
        },
        {
          x: 'Enthaltungen',
          y: abstination,
          fillColor: this.getPartyColor(party.label),
          party: party.label,
        },
        {
          x: 'Ablehnungen',
          y: no,
          fillColor: this.getPartyColor(party.label),
          party: party.label,
        },
      ];

      if (notVoted) {
        result.push({
          x: 'Nicht abg.',
          y: notVoted,
          fillColor: this.getPartyColor(party.label),
          party: party.label,
        });
      }

      return result;
    });
    return chartData;
  };

  labelStyle = () => ({
    color: 'blue',
  });

  render() {
    const { data, colorScale, showNumbers } = this.props;
    const dataSet = this.prepareChartData(data);
    return (
      <VoteResultsWrapper>
        <VoteResultsPieWrapper>
          <VictoryChart height={465} padding={{ left: 50, bottom: 25, right: 50 }}>
            <VictoryStack>
              {dataSet.map(chartData => (
                <VictoryBar
                  padding={0}
                  key={chartData[0].y}
                  barRatio={1.5}
                  data={chartData}
                  labels={d => {
                    if (d.y >= 40) {
                      return d.party;
                    }
                    return '';
                  }}
                  labelComponent={<VictoryLabel dy={30} />}
                  style={{
                    labels: { fill: 'white' },
                    data: {
                      fill: d => {
                        if (!d.fillColor) {
                          // console.log("STYLE VictoryBar", d);
                        }
                        return d.fillColor;
                      },
                    },
                  }}
                />
              ))}
            </VictoryStack>
            <VictoryAxis
              style={{
                axis: { stroke: 'none' },
                tickLabels: { fontWeight: '100', padding: 5 },
              }}
            />
          </VictoryChart>
        </VoteResultsPieWrapper>
      </VoteResultsWrapper>
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  colorScale: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  showNumbers: PropTypes.bool,
  voteResults: PropTypes.shape().isRequired,
};

BarChart.defaultProps = {
  showNumbers: true,
};

export default BarChart;
