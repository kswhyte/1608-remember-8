import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// Set any properties with this.set('myProperty', 'value');
// Handle any actions with this.on('myAction', function(val) { ... });

moduleForComponent('new-reminder-form', 'Integration | Component | reminder form', {
  integration: true
});

test('it renders with default string properties', function(assert) {
  this.render(hbs`{{new-reminder-form}}`);

  assert.equal(this.$('.add-title-input').text().trim(), '', 'starts with an empty string for the name');

});

test('it updates the name value when title is passed in', function(assert) {
  this.set('title', 'buy milk');
  this.render(hbs `{{new-reminder-form title=title}}`);
  assert.equal(this.$('.add-title-input').val(), 'buy milk', 'updates title with provided value')
});

// // Template block usage:
// this.render(hbs`
//   {{#reminder-form}}
//     template block text
//   {{/reminder-form}}`
// );
//
// assert.equal(this.$().text().trim(), 'template block text');
