Feature: Elements Page

 Background:
   Given I navigate to the DemoQa page
   And I click on "Elements" button
   Then Elements page is opened
   And I should be able to collapse the Elements container

  Scenario: Check Text Box section functionality
      When I click on "Text Box" button as a user
      And Text Box page is opened
      Then As a user, I should be able to submit valid data

  Scenario: Check whether the user receive a notification, when he has checked all the boxes
      Given I navigate to the Check Box section
      And Check Box section is opened
      When I click on Check Box button
      Then I get the notification that I have checked all boxes

  Scenario: Check whether the user receive a notification, when he hasn't checked all the boxes
     Given I navigate to the Check Box section
     When Check Box section is opened
     Then I don't receive a message, that I have checked all boxes

 Scenario Outline: Check "Radio Button" section functionality
     Given I navigate to the Radio button section
     And Radio buttons section is opened
     When I click on <buttons> btn
     Then I receive a message, that I have selected <type> radio btn
   Examples:
   |buttons           |type       |
   |yesRadio          |Yes        |
   |impressiveRadio   |Impressive |

  Scenario Outline: Check "Buttons" section functionality
    Given I navigate to the Buttons section
    And Buttons section is opened
    When I click on <buttons> buttons
    Then I receive a message, that I have clicked <type> btn
    Examples:
      |buttons           |type                          |
      |doubleClickBtn    |You have done a double click  |
      |rightClickBtn     |You have done a right click   |
      |lj1kE             |You have done a dynamic click |

  Scenario: Adding a new Record to the "Web table" and verifying that it has been added to the table
    Given I navigate to the Web Tables section
    When Web Tables section is opened
    And I add new record
    Then I verify that new record has been added to the table