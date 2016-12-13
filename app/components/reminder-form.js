import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    createReminder(model, title, date, notes, id, edit) {
      if (edit) {
        this.get('store').findRecord('reminder', id).then((record) => {
          let newDate = new Date(date);
          record.setProperties({ title, date: newDate, notes, });
          record.save();
          return this.rerouteTo(id);
        });
      } else {
        let reminder = this.getProperties('title', 'date', 'notes');
        reminder.date = new Date(reminder.date);
        this.get('store').createRecord('reminder', reminder).save().then(() => {
          this.setProperties({ title: '', date: '', notes: '' });
        });
      }
    }
  }
});
