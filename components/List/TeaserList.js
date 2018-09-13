import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { Row, Col, Spin as SpinComponent } from 'antd';
import styled from 'styled-components';

// Components
import Teaser from './Teaser';

const Spin = styled(SpinComponent)`
  width: 100%;
  padding-top: ${({ theme }) => theme.space(1)}px;
`;

const TeaserRow = styled(Row).attrs({
  gutter: ({ theme }) => theme.space(2),
})``;

const TeaserCol = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
})`
  padding-top: ${({ theme }) => theme.space(1)}px;
  padding-bottom: ${({ theme }) => theme.space(1)}px;
`;

const TeaserList = ({ loadMore, procedures, hasMore }) => {
  //
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<Spin size="large" key="spinner" />}
    >
      <TeaserRow>
        {procedures.map(({ procedureId, ...rest }) => (
          <TeaserCol key={procedureId}>
            <Teaser procedureId={procedureId} {...rest} />
          </TeaserCol>
        ))}
      </TeaserRow>
    </InfiniteScroll>
  );
};

TeaserList.propTypes = {
  loadMore: PropTypes.func.isRequired,
  procedures: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default TeaserList;
