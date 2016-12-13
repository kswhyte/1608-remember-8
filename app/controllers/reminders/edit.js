import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    reroute(id){
      this.transitionToRoute('reminders.reminder', id);
    }
  }
});
