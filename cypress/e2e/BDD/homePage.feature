@home @regression

Feature: Home Page

  Background:
    Given user opens "one-webshop-home" page


  Scenario: Home Page component verification

    Then header contains "the brand Icon"
    Then header contains "the cart Icon"
    Then "banner text" is displayed on the page
    Then "Search field" is displayed on the page
    Then "Webhosting Cards" are displayed on the page
