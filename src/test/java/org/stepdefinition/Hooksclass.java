package org.stepdefinition;

import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooksclass extends BaseClass  {

	@Before(order = 1)
	private void precondition2() {
		launchBrowser();
		System.out.println("launch the browser");
}
	@Before(order = 2)
	private void precondition1() {
	maxi();
	System.out.println("max the window");
	}
	@Before(order = 3,value ="@Smoke")
	private void precondition3() {
		System.out.println("precondition 3");
	}
	@After(order = 10, value = "@Smoke")
	private void postcondition2() {
	System.out.println("take screenshot of scenories");
	}
	@After(order = 4)
	private void postcondition1() {
		closebrowswer();
		System.out.println("close the brower");
	}
	
}
