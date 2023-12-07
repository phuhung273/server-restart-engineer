const puppeteer = require('puppeteer');

exports.handler = async (event) => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--single-process',
    ],
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(event.url);

  const textSelector = await page.waitForSelector('head > title');
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  const message = `The title of this page is ${fullTitle}`
  console.log(message);

  await browser.close();

  return message;
}