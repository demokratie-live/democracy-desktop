import React, { Component } from 'react';

// Helpers
import { subjectGroups } from 'Helpers/subjectGroupToIcon';

const Context = React.createContext();
const Consumer = Context.Consumer;

class Provider extends Component {
  state = {
    subjectGroups: Object.keys(subjectGroups),
    allSubjectGroups: true,
  };

  toggleSubjectGroup = subjectGroup => {
    if (this.state.subjectGroups.indexOf(subjectGroup) !== -1) {
      this.setState({
        subjectGroups: this.state.subjectGroups.filter(f => f !== subjectGroup),
        allSubjectGroups: false,
      });
    } else {
      this.setState({
        subjectGroups: [...this.state.subjectGroups, subjectGroup],
        allSubjectGroups: this.state.subjectGroups.length + 1 === Object.keys(subjectGroups).length,
      });
    }
  };

  toggleAllSubjectGroups = () => {
    if (this.state.subjectGroups.length === Object.keys(subjectGroups).length) {
      this.setState({
        subjectGroups: [],
        allSubjectGroups: false,
      });
    } else {
      this.setState({
        subjectGroups: Object.keys(subjectGroups),
        allSubjectGroups: true,
      });
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          toggleSubjectGroup: this.toggleSubjectGroup,
          toggleAllSubjectGroups: this.toggleAllSubjectGroups,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider, Consumer };

export default Context;
