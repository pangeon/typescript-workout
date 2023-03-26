type Count = number;

export type Product = {
    name: string,
    count: Count,
    price: number,
    amount: number
}

const productList: Product[] = [];

function addProduct(item: Product) {
    productList.push(item);
}

for (let i = 0; i < 5; i++) {
    let product: Product = {
        name: `Product_${i}`,
        count: i,
        price: 100,
        amount: 15
    }
    addProduct(product)
}
console.log(productList);