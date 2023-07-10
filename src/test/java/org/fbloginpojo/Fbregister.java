package org.fbloginpojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Fbregister extends BaseClass{
	private void fbregister() {
		PageFactory.initElements(driver, this);
	}

@FindBy(xpath="//a[text()='Create new account']")
private WebElement createnew;

@FindBy(xpath ="(//input[@type='text'])[2]")
private WebElement fname;

@FindBy(xpath="//input[@name='lastname']")
private WebElement lname;
 
@FindBy(name="reg_email__")
private WebElement mobno;

@FindBy(name="reg_passwd__")
private WebElement newpwd;


public WebElement getCreatenew() {
	return createnew;
}
public WebElement getFname() {
	return fname;
}
public WebElement getLname() {
	return lname;
}
public WebElement getMobno() {
	return mobno;
}
public WebElement getNewpwd() {
	return newpwd;
}
}



