import * as pw from "playwright";

const authFile = "playwright/.auth/user.json";

export async function setup() {
  // Perform authentication steps. Replace these actions with your own.
  const browser = await pw.chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://melkradar.com/p/search");
  await page.waitForLoadState("domcontentloaded");
  await page.locator(".guest-user").click();
  await page.locator(".shahrvand-box").click();
  await page.locator(".my-modal .tehran-box").click();
  await page.locator(".register-input").fill("09034032676");
  await page.locator(".melkradar-btn").click();

  await page.locator(".verification-code-container .code-input");
  const codeInputs = await page
    .locator(".verification-code-container .code-input")
    .all();

  page.on("dialog", (dialog) => {});

  const code = await page.evaluate(async () => {
    return await window.prompt("Enter Code:");
  });

  for (let i = 0; i < codeInputs.length; i++) {
    await codeInputs[i].fill(code!?.charAt(i));
  }

  await page.waitForTimeout(30 * 1000);

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
}
