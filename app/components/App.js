import React from 'react';
import mixin from 'cerebral/src/mixin';

class App extends React.Component {
  getCerebralState() {
    return ['inputValue', 'list'];
  }
  onInputValueSubmit(event) {
    event.preventDefault();
    if (this.state.inputValue) {
      this.signals.inputValueSubmitted();
    }
  }
  changeInputValue(event) {
    this.signals.inputValueChanged(event.target.value);
  }
  renderListItem(item, index) {
    return <li key={index}>{item}</li>
  }
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <form onSubmit={this.onInputValueSubmit.bind(this)}>
          <input type="text" value={this.state.inputValue} onChange={this.changeInputValue.bind(this)}/>
        </form>
        <ul>
          {this.state.list.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default mixin(App);