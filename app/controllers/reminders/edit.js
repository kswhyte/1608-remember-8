import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    reroute(model) {
      this.transitionToRoute('reminders.reminder' model.id)
    }
  }
});
