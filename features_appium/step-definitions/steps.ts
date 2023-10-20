import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given("Click text button", async function () {
    var textButton = await $(`~Text Button`);
    await textButton.waitForDisplayed({ timeout: 30000 });
    await textButton.click();
});

When('Add text {string}', async (msg) => {
    var textInput = await $(`~Text Input`);
    await textInput.waitForDisplayed({ timeout: 30000 });
    await textInput.click()
    await textInput.addValue(msg + "\n");
});

Then('message should be {string}', async (msg) => {
    var textOutput = await $(`~Text Output`);
    await textOutput.waitForDisplayed({ timeout: 30000 });
    var value = await textOutput.getText();
    await expect(value).toBe(msg)
})

