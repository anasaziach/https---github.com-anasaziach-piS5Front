import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../domaine/Product';

@Injectable({
  providedIn: 'root'
})
export class SupplyServiceService {

  constructor(private http: HttpClient) { }
  
  

   getAllProducts(){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get("http://localhost:8084/api/products/get",{headers});
  }

  getCategories(){
    return this.http.get<Array<String>>("http://localhost:8084/api/getCategories");
  }

  getproductById(id:String){
    return this.http.get("http://localhost:8084/"+id);
  }

  getproductsByCat(category:String){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get("http://localhost:8084/api/products/category/"+category,{headers});
  }
  
}
