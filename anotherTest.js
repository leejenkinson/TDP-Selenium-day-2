const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();


//describe block
describe("add a todo tests",  function () {

    //it block
    it("successfully adds todo to app", async function () {

        //launch the browser
        let driver = await new Builder().forBrowser("chrome").build();


        //navigate to application
        await driver.get
        ("https://lambdatest.github.io/sample-todo-app/")

        //add a todo
        await driver.findElement
        (By.id("sampletodotext"))
        .sendKeys("Learn Selenium", Key.ENTER);

        //assert
        let todoText = await 
        (await driver.findElement
            (By.xpath("/html/body/div/div/div/ul/li[6]"))).getText()
            .then(function (value) {
                return value
            });


        //assert using chai
        todoText.should.equal("Learn Selenium");


        //close the browser
        await driver.quit();

    });

});

