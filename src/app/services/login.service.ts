import { Injectable } from '@angular/core';
import User from '../domaine/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http : HttpClient
  ) { }

  getCookie(cname:String):String {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  login(mail:String,pwd:String){
    const headers = new HttpHeaders()
                .set('Content-Type', 'application/json');
    return this.http.post("http://localhost:8090/api/auth/login",{
        "email":mail,
        "password":pwd
      },{headers})  
  }

  logout():void{
    document.cookie="loged="
  }

  logedStatus():boolean{
    return this.getCookie("loged") == "true" ? true : false;
  }

  signUp(u:User){
    const headers = new HttpHeaders()
                .set('Content-Type', 'application/json');
    return this.http.post("http://localhost:8090/api/auth/signup",{
        "id": 128,
        "firstName":u.firstName,
        "lastName": u.lastName,
        "age": u.age,
        "sexe": u.sexe,
        "email": u.email,
        "password": u.password,
        "role": "user"
      }
      ,{headers})
  }
}
