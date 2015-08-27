import Controller from 'cerebral';
import Model from 'cerebral-immutable-store';

const model = Model({
  inputValue: '',
  list: []
});

const services = {};

export default Controller(model, services);
