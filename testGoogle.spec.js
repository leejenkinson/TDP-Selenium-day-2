const { Builder, By, Key } = require("selenium-webdriver");
//Builder - what builds our browser
//By - how we select the element to click or input values into
//Key - keyboard functionality
const assert = require("assert"); //for our actual test - assertions

describe("Testing automation website", function () {
  this.timeout(100000);

  let driver;

  // Makes a new driver window before each test
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    driver.manage().setTimeouts({ implicit: 5000 });
  });

  // Closes the driver after each test
  afterEach(async function () {
    driver.close();
  });

  it("open automation website and click on t-shirts", async function () {
    // Arrange
    // Tells driver to go to automation website
    driver.get("http://automationpractice.com/index.php");

    let searchTshirt; // <- Element to enter search string into
    let searchElement; // <-- The element we're looking for on the search page
    let searchText; // <-- The string of what we searched for

    // Act
    // Finding the search bar by id
    searchTshirt = await driver.findElement(By.xpath
      ("/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a"))
      .click();

    let tshirtText = await
      (await driver.findElement
        (By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/h1/span[1]"))).getText()
        .then(function (value) {
          return value
        });

    //assert.equal(tshirtText, "T-SHIRTS ");

    clickTshirt = await driver.findElement
      (By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[1]/div/a[1]/img"))
      .click();

    let chosenShirt = await
      (await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[3]/h1"))).getText()
        .then(function (value) {
          return value
        });

    assert.equal(chosenShirt, "Faded Short Sleeve T-shirts");

    addToCart = await
      (await driver.findElement
        (By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[4]/form/div/div[3]/div/p/button"))).click();

    popUp = await
      (await driver.findElement
        (By.xpath
          ("/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/a/span")))
          .click();

    addedToCart = await
    (await driver.findElement
      (By.xpath
        ("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/p/a")))
        .getText()
        .then (function (value) {
          return value
        });
       

    assert.equal(addedToCart, "Faded Short Sleeve T-shirts");
  });
});

