package org.stepdefinition;

import java.util.List;
import java.util.Map;
import io.cucumber.datatable.*;
import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Fbmaps extends BaseClass{
	@Given("To launch the browser and maximise the window")
	public void to_launch_the_browser_and_maximise_the_window() {
	 launchBrowser();
	 maxi();
	}

	@When("To launch url of fb application")
	public void to_launch_url_of_fb_application() {
	    launchUrl("https://en-gb.facebook.com/");
	}

	@When("To click create new account button")
	public void to_click_create_new_account_button() {
		WebElement createnew = driver.findElement(By.xpath("//a[text()='Create new account']"));
	    createnew.click();
	}

	@When("To pass firstname in firstname text box")
	public void to_pass_firstname_in_firstname_text_box(DataTable d) throws InterruptedException {
		Thread.sleep(3000);
		Map<String, String> m = d.asMap(String.class,String.class);
		WebElement fname = driver.findElement(By.xpath("(//input[@type='text'])[2]"));
		fname.sendKeys(m.get("firstname2"));
	}

	@When("To pass lastname in lastname text box")
	public void to_pass_lastname_in_lastname_text_box() {
		WebElement lname = driver.findElement(By.xpath("//input[@name='lastname']"));
		lname.sendKeys("kousi");
	}

	@When("To pass mobileno or email in email text box")
	public void to_pass_mobileno_or_email_in_email_text_box(DataTable d) {
		List<Map<String,String>> m = d.asMaps();
		WebElement mno = driver.findElement(By.name("reg_email__"));
		mno.sendKeys(m.get(1).get("password2"));
	}

	@When("To create password in password text box")
	public void to_create_password_in_password_text_box() {
		WebElement pwd = driver.findElement(By.name("reg_passwd__"));
		pwd.sendKeys("9003531419");
	}

	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
	    closebrowswer();
	}
	


}
