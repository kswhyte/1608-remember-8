import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    createReminder(title, date, notes) {
      // if (edit) {
      //   console.log('foo');
      // }
      let reminder = this.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    }
  }
});
