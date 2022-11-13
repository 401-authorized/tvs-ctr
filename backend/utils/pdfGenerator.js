const puppeteer = require("puppeteer");
const path = require("path");
const PCR = require("puppeteer-chromium-resolver");
const generatePdf = async (html) => {
    const option = {
        revision: "",
        detectionPath: "",
        folderName: ".chromium-browser-snapshots",
        defaultHosts: ["https://storage.googleapis.com", "https://npm.taobao.org/mirrors"],
        hosts: [],
        cacheRevisions: 2,
        retry: 3,
        silent: false
    };
    const stats = await PCR(option);
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
