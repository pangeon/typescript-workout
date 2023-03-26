import {Order} from "../3.0.5/orders";

export const orderFactory = ():
    ((color: string) => (size: string) => (quantity: number) => Order[]) => {

    let id = 0;

    return (color: string): ((size: string) => (quantity: number) => Order[]) =>
        (size: string) => (quantity: number): Order[] =>
        {
            const orders = [];
            for (let i = 0; i < quantity; i++) {
                orders.push({id: id++, color, size});
            }
            return orders;
        };
    };

const createOrder = orderFactory();
const redLine = createOrder('red');

const redSmall = redLine('S');
const redMedium = redLine('M');

const blueSmall = createOrder('blue')('S');

const order_1 = redMedium(4);
const order_2 = blueSmall(7);
const order_3 = redSmall(11);

console.log(order_1, order_2, order_3);