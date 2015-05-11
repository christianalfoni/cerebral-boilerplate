let addItem = function (cerebral) {
  cerebral.push('list', cerebral.get('inputValue'));
  cerebral.set('inputValue', '');
};

export default addItem;