export class WordpressUser {
    private userName: string = '';
    private token: string = '';
    readonly timeStamp: number = new Date().getTime();

    constructor(userName: string, token: string) {
        this.userName = userName;
        this.token = token;
    }

    logOut(): void {
        this.userName = '';
        this.token = '';
    }

    getUser(): object {
        return {
            userName: this.userName,
            token: this.token,
            createdAt: this.timeStamp
        }
    }

    protected renewToken(newToken: string): void {
        this.token = newToken;
    }
}