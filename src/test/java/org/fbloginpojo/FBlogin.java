package org.fbloginpojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FBlogin extends BaseClass {
	public FBlogin() {
		PageFactory.initElements(driver, this);
		}
		@FindBy(id="email")
		private WebElement mail;
		 @FindBy(xpath="//input[@aria-label='Password']")
	    private WebElement pwd;
		 @FindBy(name="login")
		 private WebElement loginbn;
		
		public WebElement getMail() {
			return mail;
		}
		public WebElement getPwd() {
			return pwd;
		}
		public WebElement getLoginbn() {
			return loginbn;
		}
		 }


