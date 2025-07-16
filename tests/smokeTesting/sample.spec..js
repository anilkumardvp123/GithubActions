import {test,expect}from '@playwright/test'
test("Minthra Application",async({page})=>{
await page.goto("https://www.myntra.com/mens-casual-wear?f=Brand%3AHIGHLANDER%2CKETCH&rawQuery=men%27s%20casual%20wear&sort=discount")
const product_name=await page.locator('(//h3[text()="KETCH"])[1]')
await expect(product_name).toHaveText("KETCH")
const product_price=await page.locator('(//span[@class="product-discountedPrice"])[1]')
await expect(product_price).toHaveText("Rs. 278")
})
test("Minthra Application ",async({page})=>{
    await page.goto('https://www.myntra.com/mens-casual-wear?f=Brand%3AHIGHLANDER%2CKETCH&rawQuery=men%27s%20casual%20wear&sort=discount')
   const product_names= await page.$$('//h3[@class="product-brand"]')
   for(let product_name of product_names)
   {
   const  productsnames=await product_name.textContent()
   console.log("All Products Name IS    "+ productsnames)
   }
   const product_prices=await page.$$('//span[@class="product-discountedPrice"]')
   for(let product_price of product_prices )
   {
    const productprices=await product_price.textContent()
    console.log('All Product prices are '+productprices)
   }
  
//==========Chat gpt
// const product_names = await page.$$('//h3[@class="product-brand"]');
// const product_prices = await page.$$('//span[@class="product-discountedPrice"]');

// for (let i = 0; i < product_names.length; i++) {
//     const name = await product_names[i].textContent();
//     const price = await product_prices[i].textContent();
//     console.log(`Product: ${name.trim()} | Price: ${price.trim()}`);
// }

}) 
test("Sample",async({page})=>{
    await page.goto('https://www.makemytrip.com/')
     await page.locator('(//span[text()="Hotels"])[1]').click({force:true})
     await page.waitForTimeout(2000)
     await expect(page).toHaveURL('https://www.makemytrip.com/hotels/')
    //await Page.locator('input[placeholder="From"]').fill("bangalore")
        console.log("anilkumar11")

})
test("Sample1",async({page})=>{
    await page.goto('https://www.makemytrip.com/')
    console.log("anilkumar22")
})