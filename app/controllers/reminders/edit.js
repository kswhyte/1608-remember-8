import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editReminder(title, date, notes, id) {
      console.log('foo');
      this.get('store').findRecord('reminder', id).then((record) => {
        // reminder.date = new Date(reminder.date);
        let newDate = new Date(date);
        record.setProperties({ title, date: newDate, notes, });
        record.save();
      });
    }
  }
});
