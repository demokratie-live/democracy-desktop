import { Component } from 'react';
import styled from 'styled-components';

// Components
import RenderToBody from './RenderToBody';

const Wrapper = styled.div`
  position: absolute; /* Stay in place */
  z-index: 1; /* Sit on top */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.id = Math.random()
      .toString(36)

      .substr(2, 9);
  }
  render() {
    const { children } = this.props;
    return (
      <RenderToBody id={this.id}>
        <Wrapper>{children}</Wrapper>
      </RenderToBody>
    );
  }
}

export default Modal;
