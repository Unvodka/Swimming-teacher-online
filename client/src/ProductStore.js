
const productsArray = [
    {
        id: "price_1MH7pVAobrD4cgV6LNJA0V6V",
        title: "1 hour",
        price: 39.99
    },
    {
        id: "price_1MH7qTAobrD4cgV6BK6XXkI9",
        title: "5 hours",
        price: 169.99
    },
    {
        id: "price_1MH7sYAobrD4cgV655r6HQnP",
        title: "10 hours",
        price: 299.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };