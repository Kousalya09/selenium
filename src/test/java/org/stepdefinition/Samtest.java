package org.stepdefinition;

import org.testng.annotations.Test;

public class Samtest {
	@Test(priority = 5)
	private void tc7() {
	System.out.println("test case 7");	
	}
	@Test(priority = -14)
	private void tc4() {
	System.out.println("test case 4");	
	}
	@Test(priority = -2)
	private void tc1() {
	System.out.println("test case 1");	
	}
	@Test(priority = 6)
	private void tc6() {
	System.out.println("test case 6");	
	}
	@Test(priority = 20)
	private void tc5() {
	System.out.println("test case 5");	
	}
	@Test(priority = 2)
	private void tc3() {
	System.out.println("test case 3");	
	}
	@Test
	private void tc2() {
	System.out.println("test case 2  ");	
	}
}
