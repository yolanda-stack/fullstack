import { Component, OnInit, Input  } from '@angular/core';
import { LoginService } from '../login.service'
import { Router }      from '@angular/router';
import { User } from '../user';
import { USERS } from '../mock-user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  _id: number;
	_name: string;
	_password: string;
	_userType: number;
	_email: string;
	_mobile: string;
	_confirmed: number;

  _user:User = {
    id:0,
    name:'',
    password:'',
    userType: 1,
    email:'',
    mobile:'',
    confirmed: 0,
  };

  constructor(public loginService:LoginService, public router: Router) { }
  
  ngOnInit(): void {
  }

   onSubmit(value:any){
     this.loginService.login().subscribe(()=>{
        if(this.loginService.isLoggedIn){
          this.loginService.role===0;
         // If no redirect has been set, use the default
       let homeUrl = '/importexcel';
          let redirect = this.loginService.redirectUrl?this.router.parseUrl(this.loginService.redirectUrl):homeUrl;
          this.router.navigateByUrl(redirect)
        }
      })
  }
   onUserSubmit(value:any){
    this.loginService.login().subscribe(()=>{
        if(this.loginService.isLoggedIn){
          this.loginService.role===1;
         // If no redirect has been set, use the default
        let homeUrl = '/manageipo';
          let redirect = this.loginService.redirectUrl?this.router.parseUrl(this.loginService.redirectUrl):homeUrl;
          this.router.navigateByUrl(redirect)
        }
      })
   }
 
}
