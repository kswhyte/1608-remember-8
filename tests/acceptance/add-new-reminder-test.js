import { test, skip } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create new');

test('clicking "Add a New Reminder" will render a form on the page to add new reminders', function(assert) {
  visit('/reminders/');
  click('.add-reminder-button')

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new');
    assert.equal(find('.create-new--form').length, 1);
    assert.equal(find('.add-title-input').length, 1);
    assert.equal(find('.add-date-input').length, 1);
    assert.equal(find('.add-notes-input').length, 1);
  });
});

skip('clicking "Submit" after filling out the form will...', function(assert) {
  visit('reminders/new');
  fillIn('.input-title', 'ReminderX');
  click('.input-submit');

  andThen(function() {
    assert.equal(currentURL(), 'reminders/new');
    assert.equal(find('.spec-reminder-item').text().trim(), 'ReminderX');
  });
});
