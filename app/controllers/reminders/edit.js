import Ember from 'ember';

export default Ember.Controller.extend({
  // store: Ember.inject.service(),

  actions: {
    editReminder(reminder) {
      this.get('store').findRecord('reminder', reminder.id).then((reminder) => {
        reminder.save().then((reminder) => {
          this.replaceWith('reminders.reminder', reminder.id)
        })
      });
    }
  }
});
