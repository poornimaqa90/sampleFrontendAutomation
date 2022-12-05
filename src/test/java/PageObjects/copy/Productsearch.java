package PageObjects.copy;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class Productsearch {
	
	public WebDriver ldriver;
	
	public Productsearch(WebDriver rdriver)
	{
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
		
	}
	
	@FindBy(id = "twotabsearchtextbox")
	@CacheLookup
	WebElement searchBox;
	
	
	@FindBy(id = "nav-search-submit-button")
	@CacheLookup
	WebElement selectitem;
	
	@FindBy(xpath = "//*[text()='YP Classics Retro Trucker Cap']")
	@CacheLookup
	WebElement Additem;
	

	@FindBy(id = "add-to-cart-button")
	@CacheLookup
	WebElement Addcart;
	
	@FindBy(xpath = "//*[@id='sw-gtc']/span/a") //*[@id="sw-gtc"]/span/a
	@CacheLookup
	WebElement Opencart;

	
	
	
	
	public void Search(String product ) 
	{
		searchBox.sendKeys(product);
		
	}
	
	public void select_item()
	{
		selectitem.click();
		
	}
	
	public void Add_item() 
	{
		Additem.click();
		
		
	}
	public void Add_cart() 
	{
		Addcart.click();
		
	}
	public void Open_cart() {
		Opencart.click();
		
	}
		
}

	


