export interface Order {
    id: number;
    color: string;
    size: string
}

export const createOrder = (color: string, size: string, quantity: number): Order[] => {
    let id = 0;
    const orders = [];
    for (let i = 0; i < quantity; i++) {
        orders.push({id: id++, color, size});
    }
    return orders;
};

export const orderFactory = (): ((color: string, size: string, quantity: number) => Order[]) => {
    let id = 0;
    return (color: string, size: string, quantity: number): Order[] => {
        const orders = [];
        for (let i = 0; i < quantity; i++) {
            orders.push({id: id++, color, size});
        }
        return orders;
    };
};

console.log("1. Orders without factory:\n");
const order_1 = createOrder('red', 'M', 4);
const order_2 = createOrder('blue', 'S', 7);
console.log(order_1, order_2, "\n");

console.log("2. Orders with factory pattern:\n");
const createOrderWithFactory = orderFactory();
const order_F1 = createOrderWithFactory('red', 'M', 4);
const order_F2 = createOrderWithFactory('blue', 's', 7);
console.log(order_F1, order_F2);

