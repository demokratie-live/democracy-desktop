import { Component } from 'react';
import styled from 'styled-components';

// Components
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

class Filter extends Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    const { visible } = this.state;
    console.log({ visible });
    return (
      <>
        <Button onClick={this.toggleVisibility}>
          <Icon type="funnel" />
          <ArrowIconWrapper>
            <ArrowIcon type="arrow" />
          </ArrowIconWrapper>
        </Button>

        <RenderToBody>
          <FilterBox visible={visible} handleVisibleChange={this.handleVisibleChange} />
        </RenderToBody>
      </>
    );
  }
}

export default Filter;
