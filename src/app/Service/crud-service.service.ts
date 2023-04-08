import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../Model/User.model';
import { Products } from '../Model/Products.model';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  registerUserUrl = "http://localhost:8081/api/user/registeruser"
  loginUserUrl="http://localhost:8081/api/user/loginuser"
  apiUrl="http://localhost:8081/api"
  helper=new JwtHelperService();
  constructor(
     private http: HttpClient,
    private router: Router) { }

    registerUser(user: User) {
      return this.http.post<any>(this.registerUserUrl, user);
    }

    loginUser(user: User) {
      return this.http.post<any>(this.  loginUserUrl, user);
    }

    getProduct():Observable<Products[]>{
      return this.http.get<Products[]>(this.apiUrl+"/products")  
    }

    public getProdutById(id : number):Observable<any>{
      return this.http.get<any>(`${this.apiUrl}/products/${id}`);
    }

    userDetail(){
      let token:any=localStorage.getItem('mytoken');
      if(token!=null)
      {let decotoken=this.helper.decodeToken(token);
      return decotoken.data
    }
    }
     public getUserById(id : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/user/${id}`);
  }

}
