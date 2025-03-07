// login.spec.js
import { test, expect } from '@playwright/test';
import { login } from '../pages/login.page';

test('Sign in with Google and proceed', async ({ page }) => {
    await login(page);

    console.log('Successfully signed in with Google');
});

test.only('Create group(My Quizzes)', async ({ page }) => {
    await login(page);

    await page.goto('https://app.slack.com/client/T08GJMRP2HK/D08HBBU21FS', { timeout: 60000 });
    await page.waitForLoadState('load'); // new

    console.log('Current URL:', page.url());
        
    const locatorCreateNewQuiz = '[aria-label="heavy plus sign emoji"]';
    await page.click(locatorCreateNewQuiz);

    const locatorDropdown = '[data-qa="QuizType"]';
    await page.click(locatorDropdown);

    await page.waitForSelector('text=Interactive Quiz');
    await page.click('text=Interactive Quiz'); //Interactive Quiz

    await page.waitForSelector('[aria-labelledby="Title-Title-label"]');
    await page.fill('[aria-labelledby="Title-Title-label"]', 'ตัวอย่างที่ 1');

    await page.waitForSelector('[aria-labelledby="Description-Description-label"]');
    await page.fill('[aria-labelledby="Description-Description-label"]', 'รายละเอียด');

    await page.click('[data-qa="wizard_modal_next"]');
    
    // await page.waitForTimeout(10000);
    console.log('Successfully signed in with Google');
});


