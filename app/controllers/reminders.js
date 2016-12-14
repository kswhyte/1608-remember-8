import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove(model) {
      // console.log('test remove action', model.id)
      // this.get('store').findRecord('reminder', model.id).then((reminder) => {
      //   reminder.destroyRecord()
      // });
      // console.log(model)
      model.destroyRecord();
    }
  }
});
