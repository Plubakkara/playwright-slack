require('dotenv').config();

// login.page.js

export async function login(page) {
    await page.goto('https://slack.com/signin#/signin', { timeout: 60000 });  // เพิ่มเวลา timeout

    await page.waitForSelector('button#google_login_button', { timeout: 60000 });  // เพิ่มเวลา timeout

    await page.click('button#google_login_button');

    await page.waitForURL(/accounts.google.com/, { timeout: 60000 });  // เพิ่มเวลา timeout

    await page.fill('input[type="email"]', process.env.EMAIL);

    await page.keyboard.press('Enter');

    await page.waitForSelector('input[type="password"]', { timeout: 60000 });  // เพิ่มเวลา timeout

    await page.fill('input[type="password"]', process.env.PASSWORD);

    await page.keyboard.press('Enter');

    const proceedButton = await page.locator('button:has-text("ดำเนินการต่อ")');
    await proceedButton.waitFor({ state: 'visible', timeout: 60000 });  // เพิ่มเวลา timeout
    await proceedButton.click();
    await page.waitForTimeout(10000);

    // await page.waitForSelector('a[data-qa="ssb_redirect_open_in_browser"]:has-text("use Slack in your browser")', { timeout: 60000 });  // เพิ่มเวลา timeout
    
    // await page.click('a[data-qa="ssb_redirect_open_in_browser"]:has-text("use Slack in your browser")');

    await page.goto('https://app.slack.com/client/T08GJMRP2HK', { timeout: 60000 });  // เพิ่มเวลา timeout

    await page.waitForNavigation({ waitUntil: 'load', timeout: 60000 });  // เพิ่มเวลา timeout
}
