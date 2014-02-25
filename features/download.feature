Feature: shimney-ui installs datepicker
         In order to use datepicker
         As a user
         I want to install datepicker via shimney-ui

  Scenario: User tries to install datepicker via shimney-ui for the first time
    Given the datepicker is not yet installed
    When the User runs 'shimney-ui-datepicker'
    Then the file 'datepicker.js' is copied to the 'js'-folder
    And the folder 'datepicker' is created in the 'css'-folder
    And the folder 'datepicker' is created in the 'images'-folder
    And the folder 'datepicker' is created in the 'test'-folder
    And the css-files of the datepicker are copied to the 'css/datepicker'-folder
    And the images-files of the datepicker are copied to the 'images/datepicker'-folder
    And the test-files of the datepicker are copied to the 'test/datepicker'-folder

  Scenario: User tries to install datepicker via shimney-ui one more time
    Given the datepicker is already installed
    When the User runs 'shimney-ui-datepicker'
    Then the css-files of the datepicker are copied to the 'css/datepicker'-folder
    And the images-files of the datepicker are copied to the 'images/datepicker'-folder
    And the test-files of the datepicker are copied to the 'test/datepicker'-folder