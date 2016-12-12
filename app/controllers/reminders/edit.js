import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editReminder(title, date, notes, id) {
      this.get('store').findRecord('reminder', id).then((record) => {
        record.setProperties({ title, date, notes, });
        record.save();
      });
    }
  }
});
