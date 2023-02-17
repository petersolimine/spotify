const playwright = require("playwright");
const { chromium, firefox, addExtra } = require("playwright-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { FingerprintGenerator } = require("fingerprint-generator");
const { FingerprintInjector } = require("fingerprint-injector");
chromium.use(StealthPlugin());

(async () => {
  const fingerprintGenerator = new FingerprintGenerator({
    browsers: [
      { name: "firefox", minVersion: 80 },
      { name: "chrome", minVersion: 87 },
    ],
    devices: ["desktop"],
    operatingSystems: ["macos"],
  });

  const browserFingerprintWithHeaders = fingerprintGenerator.getFingerprint({
    devices: ["desktop"],
    browsers: ["chrome"],
  });

  const fingerprintInjector = new FingerprintInjector();
  const { fingerprint } = browserFingerprintWithHeaders;
  console.log(fingerprint);

  const browser = await chromium.launch({ headless: false });

  // With certain properties, we need to inject the props into the context initialization
  const context = await browser.newContext({
    userAgent: fingerprint.userAgent,
    locale: fingerprint.navigator.language,
    // viewport: fingerprint.screen,
  });

  // Attach the rest of the fingerprint
  await fingerprintInjector.attachFingerprintToPlaywright(
    context,
    browserFingerprintWithHeaders
  );

  const page = await context.newPage();
  await page.goto("https://webglreport.com", { waitUntil: "networkidle" });
})();
