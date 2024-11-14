import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Sanpham } from './sanpham';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  private url = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }
  getAllSanpham(): Observable<any> {
    return this.httpClient.get(`${this.url}/sanpham`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  //tạo danh mục
  createSanpham(sanpham: Sanpham): Observable<any> {
    return this.httpClient.post(`${this.url}/sanpham`, JSON.stringify(sanpham), this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
    //tìm danh mục
    findSanpham(id: string): Observable<any> {
      return this.httpClient.get(`${this.url}/sanpham/${id}`).pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
    }
  //xoa danh mục
  deleteSanpham(id: string): Observable<any> {
    return this.httpClient.delete(this.url+'/sanpham/'+id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  //sua danh mục 
  updateSanpham(id:string, sanpham: Sanpham): Observable<any> {
    return this.httpClient.put(this.url+'/sanpham/'+id, JSON.stringify(sanpham), this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
    })
  );
  }
  //lấy sanpham theo danh mục
  getSanphamByDanhmuc(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}/sanpham/danhmuc/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
    })
  );}
  
  getAllDanhmuc(): Observable<any> {
  return this.httpClient.get(`${this.url}/danhmuc`).pipe(
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    })
  );
}
//lấy sản phẩm theo id
getSanphamById(id: string): Observable<any> {
  return this.httpClient.get(`${this.url}/sanpham/${id}`).pipe(
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    })
  );
}
}
// getSanphamByDanhmuc(danhmucId: string) {
//   return this.http.get<Sanpham[]>(`${this.apiUrl}/sanpham?danhmucId=${danhmucId}`);
// }
