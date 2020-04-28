import { Component, OnInit, Input } from '@angular/core';
import { Router }      from '@angular/router';
import { User } from '../user';
import { USERS } from '../mock-user';


@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  @Input() user: User;
   users= USERS;

   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  constructor(public router: Router
 
    ) { }

  ngOnInit(): void {
  }

  onSignup(value:any){
    // this.loginService.login().subscribe(()=>{
    //    if(this.loginService.isLoggedIn){
    //     // If no redirect has been set, use the default
    //   let homeUrl = this.loginService.role===0?'/importexcel':'/manageipo';
    //      let redirect = this.loginService.redirectUrl?this.router.parseUrl(this.loginService.redirectUrl):homeUrl;
    //      this.router.navigateByUrl(redirect)
    //    }
    //  })
  }
 

}
