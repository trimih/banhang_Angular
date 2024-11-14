import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }
  getAlluser(): Observable<any> {
    return this.httpClient.get(`${this.url}/user`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  //tạo danh mục
  createuser(user: User): Observable<any> {
    return this.httpClient.post(`${this.url}/user/signup`, JSON.stringify(user), this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
    //tìm danh mục
    finduser(id: string): Observable<any> {
      return this.httpClient.get(`${this.url}/user/${id}`).pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
    }
  //xoa danh mục
  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(this.url+'/user/'+id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  //sua danh mục 
  updateUser(id:string, user: User): Observable<any> {
    return this.httpClient.put(this.url+'/user/'+id, JSON.stringify(user), this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
    })
  );
  }
  //login
  loginUser(user: User): Observable<any> {
    return this.httpClient.post(this.url+'/user/login', JSON.stringify(user), this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
    })
  );
  }
}
