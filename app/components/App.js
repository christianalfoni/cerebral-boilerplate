import React from 'react';
import Cerebral from 'cerebral/decorator';

@Cerebral(['inputValue', 'list'])
class App extends React.Component {
  onInputValueSubmit(event) {
    event.preventDefault();
    if (this.props.inputValue) {
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
          <input type="text" value={this.props.inputValue} onChange={this.changeInputValue.bind(this)}/>
        </form>
        <ul>
          {this.props.list.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default App;