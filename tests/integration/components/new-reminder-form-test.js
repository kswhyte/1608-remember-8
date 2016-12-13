import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-reminder-form', 'Integration | Component | reminder form', {
  integration: true
});

test('it renders with default string properties', function(assert) {
  this.render(hbs`{{new-reminder-form}}`);

  assert.equal(this.$('.add-title-input').text().trim(), '', 'starts with an empty string for the name');

});

test('it updates the name value when title is passed in', function(assert) {
  this.set('title', 'buy milk');
  this.render(hbs `{{reminder-form title=title}}`);
  assert.equal(this.$('.edit-reminder-title').val(), 'buy milk', 'updates title with provided value')
});
