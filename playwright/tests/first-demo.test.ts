import {test, expect} from '@playwright/test'

test('First demo test', async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
    await page.locator("input[id='user-message']").fill('Jai Swaminarayan');
    await page.locator('#showInput').click();
    await page.waitForTimeout(3000);
    expect(await page.locator('#message')).toContainText('Jai Swaminarayan');

})