import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  // tagName: 'section',
  // classNames: ['add-reminder'],

  title: '',
  date: '',
  notes: '',

  actions: {
    createReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      // Date.now() || new Date()
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    }
  }
});
