export class ArrayList<T> {
    private items: T[];

    constructor(arg: T[] = []) { this.items = arg; }

    size = (): number => this.items.length;
    
    has = (item: T): boolean => this.items.includes(item);
    
    add = (item: T): void => { 
        if(!this.has(item)) 
        this.items.push(item);
    }
    
    index = (item: T): number => {
        return this.items.indexOf(item); 
    } 

    remove = (item: T): void => {
        const position = this.index(item)
        if(position >= 0) this.items.splice(position, 1); 
    }
    log = (): void => console.log(this.items, typeof (this.items[0]));
       
    
}