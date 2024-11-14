import { HttpClient, HttpErrorResponse, HttpHeaders,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Danhmuc } from './danhmuc';

@Injectable({
  providedIn: 'root'
})
export class DanhmucService {
  private url = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  getAllDanhmuc(): Observable<any> {
    return this.httpClient.get(`${this.url}/danhmuc`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  //tạo danh mục
  createDanhmuc(danhmuc: Danhmuc): Observable<any> {
    return this.httpClient.post(`${this.url}/danhmuc`, JSON.stringify(danhmuc), this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
    //tìm danh mục
    findDanhmuc(id: string): Observable<any> {
      return this.httpClient.get(`${this.url}/danhmuc/${id}`).pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
    }
  //xoa danh mục
  deleteDanhmuc(id: string): Observable<any> {
    return this.httpClient.delete(this.url+'/danhmuc/'+id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  //sua danh mục 
  updateDanhmuc(id:string, danhmuc: Danhmuc): Observable<any> {
    return this.httpClient.put(this.url+'/danhmuc/'+id, JSON.stringify(danhmuc), this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
    })
  );
  }


}
