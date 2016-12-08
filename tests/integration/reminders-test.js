import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import Ember from 'ember';

moduleForComponent('reminders', 'Integration | Component | reminders', {
  integration: true
})

test('renders with default string properties', function(assert) {
  this.render(hbs`{{reminders}}`)

  assert.equal(this.$('.spec-reminder-item').text(), '', 'starts with an empty string in name property')
})
