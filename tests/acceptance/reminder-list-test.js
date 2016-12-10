import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage re-routes to /reminders, rendering 5 reminders', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('clicking on an individual reminder title appends it to the bottom of the page with more details', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-title');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(Ember.$('.spec-reminder-title:first').text().trim(), Ember.$('.detailed-reminder-title').text().trim());
  });
});

test('welcome page should render if there are no reminders in the database', function(assert) {

  visit('/');

  andThen(function() {
    assert.equal(Ember.$('.welcome-page-headline').length, 1, 'welcome page headline exists');
    assert.equal(Ember.$('.welcome-page-headline').text(), 'Welcome to Reminders!', 'welcome page headline displays correctly');
  });
});
