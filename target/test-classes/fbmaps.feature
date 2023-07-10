@Feature2
Feature: To validate the account creation of fb application

@Sanity
Scenario:	 To create new account
Given To launch the browser and maximise the window
When To launch url of fb application
And To click create new account button

# one dimensional map data
And To pass firstname in firstname text box
#key      value
|firstnmae1|kousi|
|firstname2|jiya|
|firstname3|ram|
|firstname4|peneal|
And To pass lastname in lastname text box

# Two dimensional map data
And To pass mobileno or email in email text box
|password1|password2|password3|
|5686869  |xcnksdkjl|nmnmnmnmn|
|kjakjh|jllhll|2533638|
|4893698|dfdfdddff|fdggggg|
And To create password in password text box
Then To close the chrome browser