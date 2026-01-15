import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProuductService {

  constructor(private ProuductServiceAPI: HttpClient) { }

  getProuducts() {
    return this.ProuductServiceAPI.get('https://dummyjson.com/products');
  }
}
