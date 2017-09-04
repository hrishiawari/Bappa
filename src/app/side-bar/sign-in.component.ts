import { Component,Input,OnInit } from '@angular/core';

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
@Input()
GettingShow;
 constructor() { }

  ngOnInit() {
  }

  onsigninFun(em:String,pass:String){
  // let body=JSON.stringify({em,pass})
  if(em=="xy"){
    console.log("ok");

  }
  }
 
 
}
