package org.stepdefinition;

import org.base.BaseClass;
import org.fbloginpojo.FBlogin;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class fblogin2 extends BaseClass{
	FBlogin f;
	@When("user has to hit the facebook url")
	public void user_has_to_hit_the_facebook_url() {
launchUrl("https://en-gb.facebook.com/");
	}

	@When("user has to pass the date {string} in email field")
	public void user_has_to_pass_the_date_in_email_field(String em) {
	    f = new FBlogin();
	    passText(em, f.getMail());
	}

	@When("user has to pass the date {string} in password field")
	public void user_has_to_pass_the_date_in_password_field(String pass) {
       f = new FBlogin();
      passText(pass, f.getPwd());
	}

	@When("user has to click the login button")
	public void user_has_to_click_the_login_button() {
	    f = new FBlogin();
	    click(f.getLoginbn());
	}

	@Then("user has to close the browser")
	public void user_has_to_close_the_browser() {
	   closebrowswer();
	}

	

	

	}
	
