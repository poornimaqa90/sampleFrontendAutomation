$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/search.feature");
formatter.feature({
  "name": "Search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify if the user can navigate to www.amazon.com and create/edit the order(Mens hat)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC0001"
    }
  ]
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
  "name": "User navigates to URL as \"https://www.amazon.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Openfeatures.user_navigates_to_URL_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "searches for product as \"hats for men\"",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.searches_for_product_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.clicks_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks the product",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.clicks_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects quantity as 2 from the dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.selects_quantity_as_from_the_dropdown(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks Add to Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.clicks_Add_to_Cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks Go to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.clicks_Go_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserts that the total price and quantity",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.asserts_that_the_total_price_and_quantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "reduces the quantity from 2 to 1",
  "keyword": "And "
});
formatter.match({
  "location": "Openfeatures.reduces_the_quantity_from_to(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserts that the total price and the qualtity is modified",
  "keyword": "Then "
});
formatter.match({
  "location": "Openfeatures.asserts_that_the_total_price_and_the_qualtity_is_modified()"
});
formatter.result({
  "status": "passed"
});
});