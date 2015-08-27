import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  inputValue: ['inputValue'],
  list: ['list']
})
class App extends React.Component {
  componentDidMount() {
    this.props.signals.appMounted();
  }
  onInputValueSubmit(event) {
    event.preventDefault();
    if (this.props.inputValue) {
      this.props.signals.inputValueSubmitted();
    }
  }
  changeInputValue(event) {
    this.props.signals.inputValueChanged(event.target.value);
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