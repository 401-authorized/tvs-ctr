const puppeteer = require("puppeteer");
const path = require("path");
const PCR = require("puppeteer-chromium-resolver");
const stats = PCR.getStats();
const generatePdf = async (html) => {
  const browser = await stats.puppeteer.launch({
        headless: false,
        args: ["--no-sandbox"],
        executablePath: stats.executablePath
  });
  const page = await browser.newPage();
  await page.setContent(html);
  await page.addStyleTag({
    path: path.join(__dirname, "..", "PreviewTemplatePage.css"),
  });
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });
  await browser.close();
  return pdf;
};

module.exports = {
  generatePdf,
};
