export class Commit {
    private id: number;
    private description: string;
    private timeStamp?: number;

    constructor(id: number, description: string, timeStamp?: number) {
        this.id = id;
        this.description = description;
        this.timeStamp = timeStamp;
    }
}