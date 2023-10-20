Feature: Validate text

  Scenario: Verify text remains after user adds it
    Given Click text button
    And Add text "hello@browserstack.com"
    Then message should be "hello@browserstack.com"
