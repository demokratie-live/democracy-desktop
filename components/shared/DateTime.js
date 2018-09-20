import PropTypes from 'prop-types';
import styled from 'styled-components';
import m from 'moment';
import _ from 'lodash';

const formatDate = date => {
  if (date) {
    if (date <= new Date()) {
      return m(date).format('DD.MM.YY');
    }
    const daysDate = m(date).endOf('day');
    const days = Math.floor(m.duration(daysDate.diff(m())).asDays());

    if (days > 1) {
      return `${days} Tage`;
    } else if (days === 1) {
      return `morgen`;
    }

    const hours = Math.floor(m.duration(m(date).diff(m())).asMinutes() / 60);
    const minutes = _.padStart(
      `${Math.floor(((m.duration(m(date).diff(m())).asMinutes() / 60) % 1) * 60)}`,
      2,
      '0',
    );
    return `${hours}:${minutes}`;
  }
  return null;
};

const Time = styled.time``;

const DateTime = ({ date, fallback, style }) => (
  <Time dateTime={date} style={style}>
    {date ? formatDate(new Date(date)) : fallback}
  </Time>
);

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
  fallback: PropTypes.string,
  style: PropTypes.shape(),
};

DateTime.defaultProps = {
  fallback: '',
  style: {},
};

export default DateTime;
