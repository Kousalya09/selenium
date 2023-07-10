$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/fbmaps.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbmaps.to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Fbmaps.to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click create new account button",
  "keyword": "And "
});
formatter.match({
  "location": "Fbmaps.to_click_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass firstname in firstname text box",
  "rows": [
    {
      "cells": [
        "firstnmae1",
        "kousi"
      ]
    },
    {
      "cells": [
        "firstname2",
        "jiya"
      ]
    },
    {
      "cells": [
        "firstname3",
        "ram"
      ]
    },
    {
      "cells": [
        "firstname4",
        "peneal"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Fbmaps.to_pass_firstname_in_firstname_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass lastname in lastname text box",
  "keyword": "And "
});
formatter.match({
  "location": "Fbmaps.to_pass_lastname_in_lastname_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass mobileno or email in email text box",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "5686869",
        "xcnksdkjl",
        "nmnmnmnmn"
      ]
    },
    {
      "cells": [
        "kjakjh",
        "jllhll",
        "2533638"
      ]
    },
    {
      "cells": [
        "4893698",
        "dfdfdddff",
        "fdggggg"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Fbmaps.to_pass_mobileno_or_email_in_email_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To create password in password text box",
  "keyword": "And "
});
formatter.match({
  "location": "Fbmaps.to_create_password_in_password_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbmaps.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/sample.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin1.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the url of the Facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "Fblogin1.to_launch_the_url_of_the_Facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valid username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin1.to_pass_valid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin1.to_pass_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin1.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether navigate to the home page or not",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin1.to_check_whether_navigate_to_the_home_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fblogin1.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "user has to pass the date \"\u003cemaildates\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "user has to pass the date \"\u003cpassworddatas\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildates",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "seleniuinmakes@gmail.com",
        "inmakes"
      ]
    },
    {
      "cells": [
        "kousidreams@gmail.com",
        "kousi@09"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "12345"
      ]
    },
    {
      "cells": [
        "frameworks@gmail.com",
        "cucumber"
      ]
    },
    {
      "cells": [
        "inmakes@gmail.com",
        "878787"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin1.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin2.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"seleniuinmakes@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"inmakes\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin2.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin1.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin2.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"kousidreams@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"kousi@09\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin2.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin1.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin2.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"abc@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"12345\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin2.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin1.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin2.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"frameworks@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"cucumber\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin2.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin1.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin2.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"inmakes@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to pass the date \"878787\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_pass_the_date_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin2.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin2.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});