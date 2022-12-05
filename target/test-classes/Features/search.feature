
Feature: Search functionality


	@TC0001
  Scenario: Verify if the user can navigate to www.amazon.com and create/edit the order(Mens hat)     
   Given User is navigate to chrome Browser
	 When User navigates to URL as "https://www.amazon.com/"
	 And searches for product as "hats for men"
	 And clicks search button
	 And clicks the product
	 And selects quantity as 2 from the dropdown
	 And clicks Add to Cart button
	 And clicks Go to cart button
	 And asserts that the total price and quantity
	 And reduces the quantity from 2 to 1
	 Then asserts that the total price and the qualtity is modified
  
