import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove(model) {
      model.destroyRecord();
    }
  }
});
