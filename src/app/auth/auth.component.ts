import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import User from '../domaine/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private router: Router,private service:LoginService) { }
  user:User=new User("","",20,"M","","")
  errF=false;
  
  logo="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
  sideImg="https://www.officite.com/wp-content/uploads/sites/15/2021/05/estore-illustration.png"

register(userForm:NgForm):void{
  this.service.login(this.user.email,this.user.password)
  .subscribe((res)=>{
    if(res==true){
        document.cookie="loged=true"   
        this.errF=false
        this.router.navigateByUrl("produits");
    }
    else{
        document.cookie="loged="
        this.errF=true
        this.router.navigate([this.router.url])
    }
  })
}
}
