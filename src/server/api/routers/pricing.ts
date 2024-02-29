import puppeteer from "puppeteer-core";
import chromium from "chrome-aws-lambda";
import * as cheerio from "cheerio";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pricingRouter = createTRPCRouter({
  true: publicProcedure.query(async () => {
    const pricing = await get_pricing_true();
    return pricing;
  }),
  studio7: publicProcedure.query(async () => {
    const pricing = await get_pricing_studio7();
    return pricing;
  }),
  bananait: publicProcedure.query(async () => {
    const pricing = await get_pricing_bananait();
    return pricing;
  }),
  csc: publicProcedure.query(async () => {
    const pricing = await get_pricing_csc();
    return pricing;
  }),
  istudiobyspvi: publicProcedure.query(async () => {
    const pricing = await get_pricing_istudiobyspvi();
    return pricing;
  }),
  istudiobycopperwired: publicProcedure.query(async () => {
    const pricing = await get_pricing_istudiobycopperwired();
    return pricing;
  }),
  jaymart: publicProcedure.query(async () => {
    const pricing = await get_pricing_jaymart();
    return pricing;
  }),
  tg: publicProcedure.query(async () => {
    const pricing = await get_pricing_tg();
    return pricing;
  }),
});

const LOCAL_CHROME_EXECUTABLE =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function get_pricing_true() {
  console.log(0);
  const executablePath =
    (await chromium.executablePath) || LOCAL_CHROME_EXECUTABLE;

  const browser = await puppeteer.launch({
    executablePath,
    args: chromium.args,
    headless: false,
  });
  const page = await browser.newPage();
  console.log(1);

  await page.goto("https://www.true.th/store/online-store/brand/apple");
  console.log(2);

  const iPhone15ProMax_el = await page.waitForSelector(
    "body > div.app > div.page.shop-in-shop-page > div > div.page-container > div:nth-child(4) > div > div > section > div > a:nth-child(1) > div.content-info > div.infor_1 > div > div.wrap-price > p",
  );
  console.log(3);
  const iPhone15ProMax_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15ProMax_el,
  );
  console.log(4);
  const iPhone15ProMax = cleanNumber(iPhone15ProMax_txt);
  console.log(5);

  const iPhone15Pro_el = await page.waitForSelector(
    "body > div.app > div.page.shop-in-shop-page > div > div.page-container > div:nth-child(4) > div > div > section > div > a:nth-child(2) > div.content-info > div.infor_1 > div > div.wrap-price > p",
  );
  const iPhone15Pro_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Pro_el,
  );
  const iPhone15Pro = cleanNumber(iPhone15Pro_txt);

  const iPhone15Plus_el = await page.waitForSelector(
    "body > div.app > div.page.shop-in-shop-page > div > div.page-container > div:nth-child(4) > div > div > section > div > a:nth-child(3) > div.content-info > div.infor_1 > div > div.wrap-price > p",
  );
  const iPhone15Plus_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Plus_el,
  );
  const iPhone15Plus = cleanNumber(iPhone15Plus_txt);

  const iPhone15_el = await page.waitForSelector(
    "body > div.app > div.page.shop-in-shop-page > div > div.page-container > div:nth-child(4) > div > div > section > div > a:nth-child(4) > div.content-info > div.infor_1 > div > div.wrap-price > p",
  );
  const iPhone15_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15_el,
  );
  const iPhone15 = cleanNumber(iPhone15_txt);

  const pricing = {
    iPhone15ProMax: iPhone15ProMax,
    iPhone15Pro: iPhone15Pro,
    iPhone15Plus: iPhone15Plus,
    iPhone15: iPhone15,
  };
  console.log(6);

  await browser.close();
  console.log(7);

  return pricing;
}

async function get_pricing_studio7() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.studio7thailand.com/en/p/apple-iphone-series");

  const iPhone15ProMax_el = await page.waitForSelector(
    "#__layout > div > main > div > div:nth-child(5) > div:nth-child(2) > section.product-list-container > div.product-list > a:nth-child(1) > div.product-item-details > div:nth-child(2) > div.product-price",
  );
  const iPhone15ProMax_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15ProMax_el,
  );
  const iPhone15ProMax = cleanNumber(iPhone15ProMax_txt);

  const iPhone15Pro_el = await page.waitForSelector(
    "#__layout > div > main > div > div:nth-child(5) > div:nth-child(2) > section.product-list-container > div.product-list > a:nth-child(5) > div.product-item-details > div:nth-child(2) > div.product-price",
  );
  const iPhone15Pro_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Pro_el,
  );
  const iPhone15Pro = cleanNumber(iPhone15Pro_txt);

  await page.goto(
    "https://www.studio7thailand.com/en/p/apple-iphone-series?page=1&in_stock=true&tag_filters=iphone-15-15-plus&sort_by=relevance",
  );

  const iPhone15Plus_el = await page.waitForSelector(
    "#__layout > div > main > div > div:nth-child(5) > div:nth-child(2) > section.product-list-container > div.product-list > a:nth-child(6) > div.product-item-details > div:nth-child(2) > div.product-price",
  );
  const iPhone15Plus_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Plus_el,
  );
  const iPhone15Plus = cleanNumber(iPhone15Plus_txt);

  const iPhone15_el = await page.waitForSelector(
    "#__layout > div > main > div > div:nth-child(5) > div:nth-child(2) > section.product-list-container > div.product-list > a:nth-child(1) > div.product-item-details > div:nth-child(2) > div.product-price",
  );
  const iPhone15_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15_el,
  );
  const iPhone15 = cleanNumber(iPhone15_txt);

  const pricing = {
    iPhone15ProMax: iPhone15ProMax,
    iPhone15Pro: iPhone15Pro,
    iPhone15Plus: iPhone15Plus,
    iPhone15: iPhone15,
  };

  await browser.close();

  return pricing;
}

async function get_pricing_bananait() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.bnn.in.th/th/p/apple/apple-iphone?in_stock=false&sort_by=relevance&page=1",
  );

  const iPhone15ProMax_el = await page.waitForSelector(
    "#__layout > div > main > div > div.container > div:nth-child(2) > section.product-list-container > div.product-list > a:nth-child(2) > div.product-item-details > div.product-price",
  );
  const iPhone15ProMax_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15ProMax_el,
  );
  const iPhone15ProMax = cleanRange(iPhone15ProMax_txt);

  const iPhone15Pro_el = await page.waitForSelector(
    "#__layout > div > main > div > div.container > div:nth-child(2) > section.product-list-container > div.product-list > a:nth-child(1) > div.product-item-details > div.product-price",
  );
  const iPhone15Pro_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Pro_el,
  );
  const iPhone15Pro = cleanRange(iPhone15Pro_txt);

  const iPhone15Plus_el = await page.waitForSelector(
    "#__layout > div > main > div > div.container > div:nth-child(2) > section.product-list-container > div.product-list > a:nth-child(4) > div.product-item-details > div.product-price",
  );
  const iPhone15Plus_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Plus_el,
  );
  const iPhone15Plus = cleanRange(iPhone15Plus_txt);

  const iPhone15_el = await page.waitForSelector(
    "#__layout > div > main > div > div.container > div:nth-child(2) > section.product-list-container > div.product-list > a:nth-child(3) > div.product-item-details > div.product-price",
  );
  const iPhone15_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15_el,
  );
  const iPhone15 = cleanRange(iPhone15_txt);

  const pricing = {
    iPhone15ProMax: iPhone15ProMax,
    iPhone15Pro: iPhone15Pro,
    iPhone15Plus: iPhone15Plus,
    iPhone15: iPhone15,
  };

  await browser.close();

  return pricing;
}

async function get_pricing_csc() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.thaimobilecenter.com/catalog/Apple.asp");

  const iPhone15ProMax_el = await page.waitForSelector(
    "#row_last_update_mobile > div:nth-child(1) > div > div:nth-child(2) > div.font-red-14",
  );
  const iPhone15ProMax_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15ProMax_el,
  );
  const iPhone15ProMax = cleanNumber(iPhone15ProMax_txt);

  const iPhone15Pro_el = await page.waitForSelector(
    "#row_last_update_mobile > div:nth-child(2) > div > div:nth-child(2) > div.font-red-14",
  );
  const iPhone15Pro_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Pro_el,
  );
  const iPhone15Pro = cleanNumber(iPhone15Pro_txt);

  const iPhone15Plus_el = await page.waitForSelector(
    "#row_last_update_mobile > div:nth-child(3) > div > div:nth-child(2) > div.font-red-14",
  );
  const iPhone15Plus_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Plus_el,
  );
  const iPhone15Plus = cleanNumber(iPhone15Plus_txt);

  const iPhone15_el = await page.waitForSelector(
    "#row_last_update_mobile > div:nth-child(4) > div > div:nth-child(2) > div.font-red-14",
  );
  const iPhone15_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15_el,
  );
  const iPhone15 = cleanNumber(iPhone15_txt);

  const pricing = {
    iPhone15ProMax: iPhone15ProMax,
    iPhone15Pro: iPhone15Pro,
    iPhone15Plus: iPhone15Plus,
    iPhone15: iPhone15,
  };

  await browser.close();

  return pricing;
}

async function get_pricing_istudiobyspvi() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.istudiobyspvi.com/product-category/apple/iphone",
  );

  const html = await page.content();
  const $ = cheerio.load(html);

  const container = $("div.ais-Hits");
  const element = $(container)
    .find("div span.font-bold.text-blue-1")
    .text()
    .split(" ");

  const iPhone15ProMax = cleanNumber(element[8]);

  const iPhone15Pro = cleanNumber(element[36]);

  const iPhone15Plus = cleanNumber(element[64]);

  const iPhone15 = cleanNumber(element[92]);

  const pricing = {
    iPhone15ProMax: iPhone15ProMax,
    iPhone15Pro: iPhone15Pro,
    iPhone15Plus: iPhone15Plus,
    iPhone15: iPhone15,
  };

  await browser.close();

  return pricing;
}

async function get_pricing_istudiobycopperwired() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.istudio.store/en/products/iphone-15-pro-mu773zp-a-1",
  );

  const iPhone15ProMax_el = await page.waitForSelector(
    "#price-template--21423358214462__main > div > div > p > span.actual_price_bold",
  );
  const iPhone15ProMax_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15ProMax_el,
  );
  const iPhone15ProMax = cleanNumber(iPhone15ProMax_txt);

  await page.goto(
    "https://www.istudio.store/en/products/iphone-15-pro-mtuv3zp-a-1",
  );

  const iPhone15Pro_el = await page.waitForSelector(
    "#price-template--21423358214462__main > div > div > p > span.actual_price_bold",
  );
  const iPhone15Pro_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Pro_el,
  );
  const iPhone15Pro = cleanNumber(iPhone15Pro_txt);

  await page.goto(
    "https://www.istudio.store/en/products/iphone-15-plus-mu103zp-a-1",
  );

  const iPhone15Plus_el = await page.waitForSelector(
    "#price-template--21423358214462__main > div > div > p > span.actual_price_bold",
  );
  const iPhone15Plus_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Plus_el,
  );
  const iPhone15Plus = cleanNumber(iPhone15Plus_txt);

  await page.goto(
    "https://www.istudio.store/en/products/iphone-15-mtp13zp-a-1",
  );

  const iPhone15_el = await page.waitForSelector(
    "#price-template--21423358214462__main > div > div > p > span.actual_price_bold",
  );
  const iPhone15_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15_el,
  );
  const iPhone15 = cleanNumber(iPhone15_txt);

  const pricing = {
    iPhone15ProMax: iPhone15ProMax,
    iPhone15Pro: iPhone15Pro,
    iPhone15Plus: iPhone15Plus,
    iPhone15: iPhone15,
  };

  await browser.close();

  return pricing;
}

async function get_pricing_jaymart() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://jaymartstore.com/categories/1nNXlQskIaextc2nngdw5W3PrvU",
  );
  await page.click(
    "#app > div.products-page > div > div.products-container > div.product-filter-container > div > div.order-filter > div > div > span > div > div > div.dropdown-icon",
  );
  await page.click(
    "#app > div.products-page > div > div.products-container > div.product-filter-container > div > div.order-filter > div > div > span > div > div > div.multiselect__content-wrapper > ul > li:nth-child(1)",
  );

  let iPhone15ProMax_el;
  try {
    iPhone15ProMax_el = await page.waitForSelector(
      "#app > div.products-page > div > div.products-container > div.product-list-container > div > div > div:nth-child(12) > a > div.price > span > span.promotion",
      { timeout: 10000 },
    );
  } catch (e) {
    iPhone15ProMax_el = await page.waitForSelector(
      "#app > div.products-page > div > div.products-container > div.product-list-container > div > div > div:nth-child(12) > a > div.price > span",
    );
  }
  const iPhone15ProMax_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15ProMax_el,
  );
  const iPhone15ProMax = cleanNumber(iPhone15ProMax_txt);

  let iPhone15Pro_el;
  try {
    iPhone15Pro_el = await page.waitForSelector(
      "#app > div.products-page > div > div.products-container > div.product-list-container > div > div > div:nth-child(7) > a > div.price > span > span.promotion",
      { timeout: 10000 },
    );
  } catch (e) {
    iPhone15Pro_el = await page.waitForSelector(
      "#app > div.products-page > div > div.products-container > div.product-list-container > div > div > div:nth-child(7) > a > div.price > span",
    );
  }
  const iPhone15Pro_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Pro_el,
  );
  const iPhone15Pro = cleanNumber(iPhone15Pro_txt);

  let iPhone15Plus_el;
  try {
    iPhone15Plus_el = await page.waitForSelector(
      "#app > div.products-page > div > div.products-container > div.product-list-container > div > div > div:nth-child(4) > a > div.price > span > span.promotion",
      { timeout: 10000 },
    );
  } catch (e) {
    iPhone15Plus_el = await page.waitForSelector(
      "#app > div.products-page > div > div.products-container > div.product-list-container > div > div > div:nth-child(4) > a > div.price > span",
    );
  }
  const iPhone15Plus_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Plus_el,
  );
  const iPhone15Plus = cleanNumber(iPhone15Plus_txt);

  let iPhone15_el;
  try {
    iPhone15_el = await page.waitForSelector(
      "#app > div.products-page > div > div.products-container > div.product-list-container > div > div > div:nth-child(1) > a > div.price > span > span.promotion",
      { timeout: 10000 },
    );
  } catch (e) {
    iPhone15_el = await page.waitForSelector(
      "#app > div.products-page > div > div.products-container > div.product-list-container > div > div > div:nth-child(1) > a > div.price > span",
    );
  }

  const iPhone15_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15_el,
  );
  const iPhone15 = cleanNumber(iPhone15_txt);

  const pricing = {
    iPhone15ProMax: iPhone15ProMax,
    iPhone15Pro: iPhone15Pro,
    iPhone15Plus: iPhone15Plus,
    iPhone15: iPhone15,
  };

  await browser.close();

  return pricing;
}

async function get_pricing_tg() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.tgfone.com/product/search/?str_search=Apple%20iPhone%2015&sort=3&limit=60&br=8&cate=&amount=%E0%B8%BF100%20-%20%E0%B8%BF80000&lev=0",
  );

  const iPhone15ProMax_el = await page.waitForSelector(
    "#grid-products > div > div:nth-child(14) > div > div.product-price-rating > div.row > div.col-8.float-left > span",
  );
  const iPhone15ProMax_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15ProMax_el,
  );
  const iPhone15ProMax = cleanNumber(iPhone15ProMax_txt);

  const iPhone15Pro_el = await page.waitForSelector(
    "#grid-products > div > div:nth-child(7) > div > div.product-price-rating > div.row > div.col-8.float-left > span",
  );
  const iPhone15Pro_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Pro_el,
  );
  const iPhone15Pro = cleanNumber(iPhone15Pro_txt);

  const iPhone15Plus_el = await page.waitForSelector(
    "#grid-products > div > div:nth-child(6) > div > div.product-price-rating > div.row > div.col-8.float-left > span",
  );
  const iPhone15Plus_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15Plus_el,
  );
  const iPhone15Plus = cleanNumber(iPhone15Plus_txt);

  const iPhone15_el = await page.waitForSelector(
    "#grid-products > div > div:nth-child(1) > div > div.product-price-rating > div.row > div.col-8.float-left > span",
  );
  const iPhone15_txt = await page.evaluate(
    (element) => element?.textContent,
    iPhone15_el,
  );
  const iPhone15 = cleanNumber(iPhone15_txt);

  const pricing = {
    iPhone15ProMax: iPhone15ProMax,
    iPhone15Pro: iPhone15Pro,
    iPhone15Plus: iPhone15Plus,
    iPhone15: iPhone15,
  };

  await browser.close();

  return pricing;
}

function cleanNumber(text: string | null | undefined) {
  if (!text) return -1;
  const cleanNumber = text.replace(/[^0-9.]/g, "");
  const number = parseFloat(cleanNumber);

  return number;
}

function cleanRange(text: string | null | undefined) {
  if (!text) return -1;
  const match = text.match(/(\d+(,\d+)*)/);

  if (!match) return -1;
  if (!match[1]) return -1;

  const numberWithoutSymbol = match[1].replace(/^฿/, "");
  const firstNumber = parseInt(numberWithoutSymbol.replace(/,/g, ""), 10);
  return firstNumber;
}
