$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/search.feature");
formatter.feature({
  "name": "Search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search a product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is navigate to chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Openfeatures.user_is_navigate_to_chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigate to URL as \"https://www.amazon.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Openfeatures.user_is_navigate_to_URL_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search for product as \"hats for men\"",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.search_for_product_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to click search icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Openfeatures.user_to_click_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the product",
  "keyword": "When "
});
formatter.match({
  "location": "Openfeatures.click_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select 2 quantity from the dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.select_quantity_from_the_dropdown(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to click Add to Cart button",
  "keyword": "Then "
});
formatter.match({
  "location": "Openfeatures.user_to_click_Add_to_Cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Go to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.click_Go_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that the total price and quantity",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.assert_that_the_total_price_and_quantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Reduce the quantity from 2 to 1 from the dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.reduce_the_quantity_from_to_from_the_dropdown(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that reduced total price and quantity",
  "keyword": "Then "
});
formatter.match({
  "location": "Openfeatures.Assert_that_reduced_total_price_and_quantity()"
});
formatter.result({
  "status": "passed"
});
});