import React, { Component } from 'react';

// Helpers
import { subjectGroups } from 'Helpers/subjectGroupToIcon';

const Context = React.createContext();
const Consumer = Context.Consumer;

class Provider extends Component {
  state = {
    subjectGroups: Object.keys(subjectGroups),
  };

  toggleSubjectGroup = subjectGroup => {
    const { subjectGroups } = this.state;
    if (subjectGroups.indexOf(subjectGroup) > -1) {
      this.setState({
        subjectGroups: subjectGroups.filter(f => f !== subjectGroup),
      });
    } else {
      this.setState({
        subjectGroups: [...subjectGroups, subjectGroup],
      });
    }
  };

  render() {
    return (
      <Context.Provider value={{ state: this.state, toggleSubjectGroup: this.toggleSubjectGroup }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider, Consumer };

export default Context;
