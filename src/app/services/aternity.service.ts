import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AternityService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  getPostsByUser(userId: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
  
  addPost(body): Observable<any> {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, body);
  }
}
