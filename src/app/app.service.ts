import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // constructor(private http: HttpClient) { }

  // rootURL = '/api';

  // getUsers() {
  //   return this.http.get(this.rootURL + '/users');
  // }

  // addUser(user: any) {
  //   return this.http.post(this.rootURL + '/user', {user});
  // }

  private _showLoading: boolean = false;
  public get showLoading(): boolean {
    return this._showLoading;
  }

  constructor(private http: HttpClient) { }

  /**
   * Get application host name.
   *
   * const host = this.app.hostName;
   */
  get hostName(): string {
    return document.getElementsByTagName('base')[0].href;
  }

  getProducts(): Observable<any> {
    const pdt = this.http.get<any>('https://dummyjson.com/products');
    // this.messageService.add('HeroService: fetched heroes');
    return pdt;
  }

  getProductsById(id:number): Observable<any> {
    //const pdt = this.http.get<any>('https://dummyjson.com/products/2');
    const pdt = this.http.get<any>('https://dummyjson.com/products/' + id);
    //const pdt = this.http.get<any>([`https://dummyjson.com/products/`],{queryParams:{id:id}});
    // this.messageService.add('HeroService: fetched heroes');
    return pdt;
  }
}