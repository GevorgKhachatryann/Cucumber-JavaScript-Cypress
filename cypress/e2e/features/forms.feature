Feature: Forms Page

  Background:
    When I navigate to the DemoQa page as a user
    And I click on Forms button

  Scenario: Check Practice form  button functionality
    Given Forms page is opened
    And I should be able to collapse the Forms container as a user
    When I click on "practice form" Btn
    Then Practice form page is opened

  Scenario:  Check whether the user receive a notification, when he has filled all the boxes
    Given  Forms page is opened
    And  I click on "practice form" Btn
    When I fill all the boxes
    And I click on submit button
    Then I get a message letting me know that I submitted the form

  Scenario:  Check whether the user receive a notification, when he hasn't filled all the boxes
    Given  Forms page is opened
    And  I click on "practice form" Btn
    When Some boxes I filled, the others I didn't fill
    And I click on submit button
    Then I didn't get a message letting me know that I submitted the form
