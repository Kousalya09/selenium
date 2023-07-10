@Feature1
Feature: To validate the login functionality of facebook application  

Background:
Given To launch the chrome browser and maximise window

@Regression @Sanity
Scenario: To validate login with valid username and invalid password
When To launch the url of the Facebook application
And To pass valid username in email field
And To pass invalid password in password field
And To click the login button
And To check whether navigate to the home page or not
Then To close the browser

@Smoke
Scenario Outline: To validate the positive and negative combination of login functionality
When user has to hit the facebook url
And user has to pass the date "<emaildates>" in email field
And user has to pass the date "<passworddatas>" in password field
And user has to click the login button
Then user has to close the browser

Examples:
|emaildates              |passworddatas|
|seleniuinmakes@gmail.com|inmakes      |
|kousidreams@gmail.com   |kousi@09     |
|abc@gmail.com           |12345        |
|frameworks@gmail.com    |cucumber     |
|inmakes@gmail.com       |878787       |