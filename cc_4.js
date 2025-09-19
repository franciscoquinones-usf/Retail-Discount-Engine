// Coding Challenge 04a

// Code goes here

// Step 2 Initial Array

let Products = [
    {Name: "Watch", Category: "Electronics", Price: 59.99, Inventory: 4},
    {Name: "Peppers", Category: "Groceries", Price: 4.99,Inventory: 10},
    {Name: "Clorox Wipes", Category: "Household", Price: 9.99, Inventory: 3},
    {Name: "Black T-Shirt", Category: "Apparel", Price: 19.99, Inventory: 9},
    {Name: "Nike Shoes", Category: "Apparel", Price: 49.99, Inventory: 6},
];

// Step 3 Loops and discount applied

for (let product of Products) {
    const originalPrice = product.Price;
    let discount = 0;

    switch (product.Category) {
        case "Electronics":
            discount = 0.20;
            break;
        case "Apparel":
            discount = 0.15;
            break;
        case "Groceries":
        case "Household":
            discount = 0.10;
            break;
        default:
            discount = 0;
    }

product.Price = parseFloat((product.Price * (1-discount)).toFixed(2));
}

// Step 4: New Variables with discount 

let customerType = ["Regular", "Student", "Senior"];
let total = 0;

for (let product of Products) {
        total += product.Price;
    }

let extraDiscount = 0;

if (customerType === "Student") {
    extraDiscount = 0.05;
} else if (customerType === "Senior") {
    extraDiscount = 0.07;
} else {
    extraDiscount = 0;
}

let finalTotal = parseFloat((total * (1-extraDiscount)).toFixed(2));

// Step 5: For loops as checkout process 

let customers = [
    {name: "Jane", type: "Regular", shoppingList: ["Watch", "Black T-Shirt", "Nike Shoes"]},
    {name: "John", type: "Student", shoppingList: ["Watch", "Peppers", "Black T-Shirt"]},
    {name: "Erick", type: "Senior", shoppingList: ["Peppers", "Clorox Wipes"]},
];

for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let cartTotal = 0;

for (let item of customer.shoppingList) {
    let product = Products.find(p => p.Name === item);

    if (product && product.Inventory > 0) {
        cartTotal += product.Price;
        product.Inventory--;
    } else {
        console.log(`${customer.name} attemped to purchase ${item}, but it's out of stock`);
    }
    }

let extraDiscount = 0;
if (customer === "Student") {
    extraDiscount = 0.05;
} else if (customer === "Senior") {
    extraDiscount = 0.07;
}

let finalTotal = parseFloat((cartTotal * (1-extraDiscount)).toFixed(2));
}

// Step 6