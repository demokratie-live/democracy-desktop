import { Component } from 'react';
import styled from 'styled-components';

// Components
import { Modal as AntModal, Popover } from 'antd';

import Icon from 'Components/shared/Icon';
import ButtonComponent from 'Components/shared/Button';
import RenderToBody from 'Components/shared/RenderToBody';
import FilterBox from './FilterBox';

const Button = styled(ButtonComponent)`
  border: 0;
`;

const ArrowIconWrapper = styled.div.attrs({
  type: 'arrow',
})`
  transform: rotate(180deg);
  display: inline-block;
  margin-left: 3px;
`;

const ArrowIcon = styled(Icon)`
  &:before {
    top: 2px;
    font-size: 12px;
  }
`;

const Modal = styled(AntModal)`
  /* top: 140px;
  border-radius: 0; */
`;

class Filter extends Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <>
        <Button>
          <Icon type="funnel" />
          <ArrowIconWrapper>
            <ArrowIcon type="arrow" />
          </ArrowIconWrapper>
        </Button>

        <RenderToBody>
          <FilterBox />
        </RenderToBody>
      </>
    );
  }
}

export default Filter;
