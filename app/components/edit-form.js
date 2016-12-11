import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    editReminder(reminder) {
      console.log('flag', reminder)
      this.get('store').findRecord('reminder', reminder.id).then((reminder) => {
        reminder.save().then((reminder) => {
          this.replaceWith('reminders.reminder', reminder.id)
        })
      });
    }
  }
});
