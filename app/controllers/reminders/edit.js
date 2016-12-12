import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editReminder(model) {
      this.get('store').findRecord('reminder', model.id).then((record) => {
        let newDate = new Date(model.date);
        record.setProperties({ title: model.title, date: newDate, notes: model.notes, });
        record.save();
      });
    }
  }
});
