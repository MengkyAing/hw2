document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const productData = {};

    // 1. Collect and process data (same as before)
    for (const [key, value] of formData.entries()) {
        if (key === 'price' || key === 'discount' || key === 'quantity') {
            productData[key] = parseFloat(value);
        } else {
            productData[key] = value;
        }
    }

    const originalPrice = productData.price;
    const discountRate = productData.discount / 100;
    const finalPrice = originalPrice * (1 - discountRate);

    productData.finalPrice = parseFloat(finalPrice.toFixed(2));
    const totalValue = (productData.finalPrice * productData.quantity).toFixed(2);
    
    // Log to console (as requested in the original prompt)
    console.log('--- Product Submitted and Displayed on Page ---');
    console.log(productData);
    console.log('--------------------------------------------');


    // 2. Generate the HTML for the Table
    const outputDiv = document.getElementById('dataOutput');
    outputDiv.innerHTML = `
        <h3 class="table-header">Submitted Product Details</h3>
        <table class="product-table">
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Product Name</td>
                <td>${productData.name}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>${productData.description}</td>
            </tr>
            <tr>
                <td>Quantity</td>
                <td>${productData.quantity}</td>
            </tr>
            <tr>
                <td>Original Price</td>
                <td>$${productData.price.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Discount Applied</td>
                <td>${productData.discount}%</td>
            </tr>
            <tr>
                <td>Final Unit Price</td>
                <td>$${productData.finalPrice.toFixed(2)}</td>
            </tr>
            <tr style="font-weight: bold; background-color: #e6f7ff;">
                <td>TOTAL Value (Qty x Final Price)</td>
                <td>$${totalValue}</td>
            </tr>
        </table>
    `;

    // 3. Clear the form
    form.reset();
});




// // Function to calculate the discount percentage based on the price
// function calculateDiscount(price) {
//     let discountPercent = 0; // Default to 0%

//     // The conditions MUST be checked from the highest price tier down
//     // to ensure the user gets the best possible discount.

//     if (price >= 1000) {
//         discountPercent = 20; // 20% for price >= $1000
//     } else if (price >= 500) {
//         discountPercent = 10; // 10% for price >= $500
//     } else if (price >= 100) {
//         discountPercent = 5; // 20% for price >= $100 
//                                // (Note: This rule is identical to the first one based on your input)
//     } else {
//         discountPercent = 0;  // 0% for price < $100
//     }
    
//     return discountPercent;
// }


// document.getElementById('productForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form);
//     const productData = {};

//     // 1. Collect and process data
//     for (const [key, value] of formData.entries()) {
//         if (key === 'price' || key === 'quantity') {
//             // Price and Quantity are required for calculations
//             productData[key] = parseFloat(value);
//         } else {
//             productData[key] = value;
//         }
//     }
    
//     // --- START OF NEW DISCOUNT LOGIC ---
    
//     const originalPrice = productData.price;
    
//     // 2. Use the new function to determine the discount percentage
//     const assignedDiscount = calculateDiscount(originalPrice);
    
//     // Store the determined discount in the data object
//     productData.discount = assignedDiscount;

//     // 3. Calculate final price based on the assigned discount
//     const discountRate = assignedDiscount / 100;
//     const finalPrice = originalPrice * (1 - discountRate);

//     // Final calculated values
//     productData.finalPrice = parseFloat(finalPrice.toFixed(2));
//     const totalValue = (productData.finalPrice * productData.quantity).toFixed(2);
    
//     // --- END OF NEW DISCOUNT LOGIC ---
    
//     // Log to console (as requested in the original prompt)
//     console.log('--- Product Submitted and Displayed on Page ---');
//     console.log(`Original Price: $${originalPrice.toFixed(2)}`);
//     console.log(`Assigned Discount Rule: ${assignedDiscount}%`);
//     console.log(productData);
//     console.log('--------------------------------------------');


//     // 4. Generate the HTML for the Table (using the UI 2.0 structure)
//     const outputDiv = document.getElementById('dataOutput');
//     outputDiv.innerHTML = `
//         <h3 class="table-header">Submitted Product Details (Discount Applied)</h3>
//         <table class="product-table">
//             <tr>
//                 <th>Field</th>
//                 <th>Value</th>
//             </tr>
//             <tr>
//                 <td>Product Name</td>
//                 <td>${productData.name}</td>
//             </tr>
//             <tr>
//                 <td>Description</td>
//                 <td>${productData.description}</td>
//             </tr>
//             <tr>
//                 <td>Quantity</td>
//                 <td>${productData.quantity}</td>
//             </tr>
//             <tr>
//                 <td>Original Price</td>
//                 <td>$${originalPrice.toFixed(2)}</td>
//             </tr>
//             <tr style="background-color: #ffe0b2;">
//                 <td>**Calculated Discount**</td>
//                 <td>**${assignedDiscount}%**</td>
//             </tr>
//             <tr>
//                 <td>Final Unit Price</td>
//                 <td>$${productData.finalPrice.toFixed(2)}</td>
//             </tr>
//             <tr style="font-weight: bold; background-color: #e6f7ff;">
//                 <td>TOTAL Value (Qty x Final Price)</td>
//                 <td>$${totalValue}</td>
//             </tr>
//         </table>
//     `;

//     // 5. Clear the form
//     form.reset();
// });