package Stepdefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import PageObjects.copy.Productsearch;
import cucumber.api.java.en.*;


public class Openfeatures 
{
	
		public WebDriver driver;
		public Productsearch ps;
	
	
		@Given("User is navigate to chrome Browser")
		public void user_is_navigate_to_chrome_Browser() 
		{
		
				driver = new ChromeDriver();
				ps=new Productsearch(driver);
	    
		}
		@When("User navigates to URL as {string}")
		public void user_navigates_to_URL_as(String url) 
		{ 
			
				driver.get(url);
	
		} 
	
		@When("searches for product as {string}")
		public void searches_for_product_as(String product) 
		{ 
			
				ps.Search(product);	
		
		}  
	
		@When("clicks search button")
		public void clicks_search_button() 
		{
			
				ps.select_item();
		
		}
	
		@When("clicks the product")
		public void clicks_the_product() 
		{
			
				ps.Add_item(); 
		
		} 
	
		@When("selects quantity as {int} from the dropdown")
		public void selects_quantity_as_from_the_dropdown(Integer int1)
		{
		
				Select Addquantity =new Select(driver.findElement(By.cssSelector("#selectQuantity #quantity")));
				Addquantity.selectByIndex(1);	  	   	
		
		}
	
		@When("clicks Add to Cart button")
		public void clicks_Add_to_Cart_button() 
		{
			
				ps.Add_cart();
		}
		
		@When("clicks Go to cart button")
		public void clicks_Go_to_cart_button() 
		{
		
				ps.Open_cart();	
		}
	
		@When("asserts that the total price and quantity")
		public void asserts_that_the_total_price_and_quantity() 
		{
				
				String Addeditem=driver.findElement(By.xpath("//*[@id='sc-subtotal-label-buybox']")).getText();
				String Totalamount=driver.findElement(By.xpath("//*[@id='sc-subtotal-amount-buybox']/span")).getText();
			
				System.out.println(Addeditem);
				System.out.println(Totalamount);
			
				Assert.assertEquals("Subtotal (2 items):",Addeditem); 
				Assert.assertEquals("$18.58",Totalamount); 
		}
	
		@When("reduces the quantity from {int} to {int}")
		public void reduces_the_quantity_from_to(Integer int1, Integer int2) 
		
		{
	
				Select Reducequantity =new Select(driver.findElement(By.xpath("//*[@id=\"quantity\"]")));
				Reducequantity.selectByIndex(1);
		}
	
		@Then("asserts that the total price and the qualtity is modified")
		public void asserts_that_the_total_price_and_the_qualtity_is_modified() 
		{
	
	    
			    driver.navigate().refresh();
				String reduced_quantity = driver.findElement(By.xpath("//div[@data-name='Subtotals']/span[@id='sc-subtotal-label-buybox']")).getText();
			    String reduced_amount = driver.findElement(By.xpath("//*[@id=\'sc-subtotal-amount-activecart\']/span")).getText();
			
			    System.out.println(reduced_quantity);
				System.out.println(reduced_amount);
			    
			    Assert.assertEquals("Subtotal (1 item):",reduced_quantity); 
				Assert.assertEquals("$9.29",reduced_amount);  
			
			    driver.quit();
	
		}


}