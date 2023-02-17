const playwright = require("playwright");
const { chromium, firefox, addExtra } = require("playwright-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { FingerprintGenerator } = require("fingerprint-generator");
firefox.use(StealthPlugin());

let fingerprintGenerator = new FingerprintGenerator({
  browsers: [
    { name: "firefox", minVersion: 80 },
    { name: "chrome", minVersion: 87 },
    "safari",
  ],
  devices: ["desktop"],
  operatingSystems: ["windows"],
});

let { fingerprint, headers } = fingerprintGenerator.getFingerprint({
  operatingSystems: ["linux"],
  locales: ["en-US", "en"],
});

console.log(fingerprint);
console.log(headers);

async function playSong() {
  const browser = await chromium.launch({
    headless: false, // Disable headless mode
  });

  const context = await browser.newContext({
    userAgent: generateRandomUserAgent(), // Use a random user agent for each browser instance
    viewport: null, // Disable the viewport.
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    userAgent: generateRandomUserAgent(), // Use a random user agent for each browser instance
  });

  const page = await context.newPage();

  console.log("Testing the webgl spoofing feature of the stealth plugin..");
  const stealthPlugin = StealthPlugin();
  await stealthPlugin.onBrowser(browser); // Apply stealth mode to the browser
  await page.goto("https://webglreport.com", { waitUntil: "networkidle" });
  await page.screenshot({ path: "webgl3.png", fullPage: true });
  await page.goto("https://showmyip.com/", { waitUntil: "domcontentloaded" });
  const ip1 = await page.evaluate("document.querySelector('#ipv4').innerText");
  console.log("Outbound IP #1:", ip1);

  //   // Insert random delays between each request
  //   await delay(getRandomIntInclusive(1000, 3000));

  //   // Connect to the proxy server
  //   const proxyUrl = "http://my-proxy-server.com:8080";
  //   const proxy = await context.newProxy({ server: proxyUrl });
  //   await page.route("**", (route) => route.proxy(proxy));

  //   // Navigate to the Spotify login page
  //   await page.goto("https://www.spotify.com/login");

  //   // Emulate human-like behavior by clicking, scrolling, and other interactions
  //   const emailInput = await page.waitForSelector("#login-username");
  //   await emailInput.click();
  //   await emailInput.type("my-email-address");

  //   // Insert random delays between each interaction
  //   await delay(getRandomIntInclusive(1000, 3000));

  //   const passwordInput = await page.waitForSelector("#login-password");
  //   await passwordInput.click();
  //   await passwordInput.type("my-password");

  //   // Insert random delays between each interaction
  //   await delay(getRandomIntInclusive(1000, 3000));

  //   const loginButton = await page.waitForSelector("#login-button");
  //   await loginButton.click();

  //   // Wait for the user to log in and perform other actions on the Spotify web interface

  await browser.close();
}

function generateRandomUserAgent() {
  // Your code to generate a random user agent
  return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36";
}

function getRandomIntInclusive(min, max) {
  // Your code to generate a random integer between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(ms) {
  // Your code to insert a delay for the specified number of milliseconds
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getUserAgentForProfile(profileId) {
  // go to ../data/accounts.json and find the user agent for the specified profile id
  return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36";
}

playSong();

module.exports = { playSong };
