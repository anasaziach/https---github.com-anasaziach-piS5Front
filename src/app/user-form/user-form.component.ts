import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import User from '../domaine/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

constructor(
  private loginService:LoginService,
  private router: Router
  ){}

  user:User=new User("","",20,"M","","");
  pwd2:String="";


register(form:NgForm){
  this.loginService.signUp(this.user)
  .subscribe((user)=>{
    if(user!=null){
      document.cookie="loged=true"
      this.router.navigateByUrl("home");
    }
    else{
      document.cookie="loged="
      this.router.navigate([this.router.url])
}
  })
}

}
