import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface User {
    name: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) {};
    
    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>('/api/users');
    }
}