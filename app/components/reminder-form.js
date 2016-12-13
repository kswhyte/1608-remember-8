import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    handleReminder(model) {
      let reminder = this.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      if (this.edit) {
        this.get('store').findRecord('reminder', model.id).then((model) => {
          let newDate = new Date(date);
          model.setProperties({ title, date: newDate, notes, });
          model.save();
          return this.rerouteBack(model)
        });
      } else {
        this.get('store').createRecord('reminder', reminder).save().then(() => {
          this.setProperties({ title: '', date: '', notes: '' });
        });
      }
    }
  }
});
