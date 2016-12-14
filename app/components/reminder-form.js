import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    createReminder(model, edit) {
      if (edit) {
        let editProps = model.getProperties('title', 'date', 'notes', 'id');
        this.get('store').findRecord('reminder', model.id).then((reminder) => {
          let newDate = new Date(editProps.date);
          reminder.setProperties({
            title: editProps.title,
            date: newDate,
            notes: editProps.notes,
          });
          reminder.save();
          return this.rerouteTo(editProps.id);
        });
      } else {
        let reminder = this.getProperties('title', 'date', 'notes', 'edit');
        reminder.date = new Date(reminder.date);
        this.get('store').createRecord('reminder', reminder).save().then(() => {
          this.setProperties({ title: '', date: '', notes: '' });
        });
      }
    },
    revert(model) {
      if (model.get('hasDirtyAttributes')) {
        model.rollbackAttributes()
      }
    },
  }
});

// removeTodo: function () {
//   var todo = this.get('model');
//   todo.deleteRecord();
//   todo.save();
// }
