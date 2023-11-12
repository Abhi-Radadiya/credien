// // pages/api/generatePdf.js

// import puppeteer from "puppeteer";

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         // Create a browser instance
//         const browser = await puppeteer.launch();

//         // Create a new page
//         const page = await browser.newPage();

//         // Get HTML content from the request body
//         const html = req.body.html;

//         // Set HTML content
//         await page.setContent(html, { waitUntil: "domcontentloaded" });

//         // Scroll down to the bottom of the page
//         await page.evaluate(() => {
//             window.scrollTo(0, document.body.scrollHeight);
//         });

//         // Wait for a brief moment to ensure images have time to load
//         await page.waitForTimeout(1000);

//         // Download the PDF
//         const pdf = await page.pdf({
//             format: "A4",
//             margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
//             printBackground: true,
//         });

//         // Close the browser instance
//         await browser.close();

//         // Send the PDF as a response
//         res.setHeader("Content-Type", "application/pdf");
//         res.setHeader("Content-Disposition", "attachment; filename=result.pdf");
//         res.status(200).send(pdf);
//         res.status(200).send(pdf); // Assuming pdf is defined
//     } else {
//         res.status(405).send("tis is unvalinlae"); // Method Not Allowed for other HTTP methods
//     }
// }

import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
    const data = {
        name: "Bishal Shrestha",
        age: "27",
    };

    return NextResponse.json({ data });
}

export async function POST(req, res) {
    const data = await req.json();
    // const browser = await puppeteer.launch();

    // // Create a new page
    // const page = await browser.newPage();

    // // Get HTML content from the request body
    // const html = req.body.html;

    // console.log("html==>", req);

    // // Set HTML content
    // await page.setContent(html, { waitUntil: "domcontentloaded" });

    // // Scroll down to the bottom of the page
    // await page.evaluate(() => {
    //     window.scrollTo(0, document.body.scrollHeight);
    // });

    // // Wait for a brief moment to ensure images have time to load
    // await page.waitForTimeout(1000);

    // // Download the PDF
    // const pdf = await page.pdf({
    //     format: "A4",
    //     margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    //     printBackground: true,
    // });

    // // Close the browser instance
    // await browser.close();
    console.log("data==>", data.body);
    return NextResponse.json(data);
}
