import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editReminder(title, date, notes, id) {
      console.log('foo');
      this.get('store').findRecord('reminder', id).then((record) => {
        let newDate = new Date(date);
        record.setProperties({ title, date: newDate, notes, });
        record.save();
      });
    }
  }
});
