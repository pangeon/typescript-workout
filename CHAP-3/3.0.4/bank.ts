export const account = {
    due: 1000,
    paid: 0,
    status: 'OPEN',
    printStatus: function (): string {
        return `$${this.paid} paid and $${this.due - this.paid } is overdue. This account is ${this.status}`;
    },
    // Is impossible !    (): string => `$${paid} paid and $${this.due - this.paid } is overdue.`,
    payMoney: function (amount: number): string {
        if (amount > this.due - this.paid) return `$${amount} is more than outstanding amount $${this.due - this.paid}.`;
        this.paid += amount;

        if(this.paid === this.due) this.status = "CLOSED";

        return this.printStatus();
    },
};

console.log(account.printStatus());
console.log(account.payMoney(1500));
console.log(account.payMoney(500));
console.log(account.payMoney(500));
