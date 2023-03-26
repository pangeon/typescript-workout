type Product = { name: string, price: number, amount: number }
type Post = { header: string, method: string, product: Product }
type Put = { header: string, method: string, product: Product, productId: number }
type ApiRequest = Post | Put;
const products: Product[] = [];

function ProcessRequest(request: ApiRequest) {
    if ("productId" in request) {
        products.forEach((product: Product, index: number) => {
            products[request.productId] = {
                ...request.product
            };
        })
    } else {
        products.push(request.product);
    }
}

const pendrive = {name: "SANDISK CRUZER BLADE 32GB", price: 24.90, amount: 10};

const router = {name: "TP-LINK TD-W9960", price: 146.13, amount: 15};

const postPendriveRequest: Post = {header: "POST /home.html HTTP/1.1", method: "new", product: pendrive};

const putRouterRequest: Put = {header: "PUT /new.html HTTP/1.1", method: "update", product: router, productId: 2};

ProcessRequest(postPendriveRequest);
ProcessRequest(putRouterRequest);

console.log(products);