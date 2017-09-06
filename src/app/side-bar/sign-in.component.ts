import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import {LoginOutService} from '../AllServices/login-out.service';
@Component({
  selector: 'app-sign-in',
  template: `
  
   <div class="FormSignin" *ngIf="GettingShow">
      <input #em type="text" placeholder="example@example.com"  style="margin-top:140px; border:1px gray;
      border-radius:5px;text-indent: 10px;"/>
      <br>
      <br>
      <input #pass type="password" placeholder="password" style=" border:1px #C6C6C5;text-indent: 10px;
      border-radius:5px"/><br>
      <br>
      
      <button class="btn btn-danger" style="border:1px #C6C6C5;
      border-radius:5px" (click)="onsigninFun(em.value,pass.value)"> Sign IN</button>
   <div>
  `,
  styles: [
    'h1 { font-weight: normal; }',
   `.FormSignin{ 
     margin-left:35%;
     margin-top:110px;
     border:1px solid blue;
     border-radius:10px;
     background-color:#EC8740;
     text-align:center;
       width:300px;
      height:400px;}` 
  ]
})
export class SignInComponent implements OnInit {
  constructor(
  private LoginOutService: LoginOutService
   ) {}

@Input()
GettingShow :boolean;





  ngOnInit() {
  
    // this.LogService.logout();
  }
  onsigninFun(em:string,pass:string){
 

// this.GettingShow=false;
this.LoginOutService.login(em,pass);
this.GettingShow=this.LoginOutService.nm;
  }

  
}
