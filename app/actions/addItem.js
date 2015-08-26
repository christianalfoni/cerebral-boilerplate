let addItem = function (input, state, output, services) {
  state.push('list', state.get('inputValue'));
  state.set('inputValue', '');
};

export default addItem;