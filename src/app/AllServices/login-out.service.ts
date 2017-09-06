import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable()
export class LoginOutService {
  @Output()
  val:EventEmitter<any>

  constructor() {
    this.val=new EventEmitter<String>();
   }

  nm:boolean;
n:string
  login(Username:string,Password:string){
    if (Username=="a" && Password=="a"){
      localStorage.setItem('currentUser', Username)
      this.nm=false;
      this.val.emit({
        User:Username,
        isLogin :'true'
        
      })
     
      
    }

  }
  logout(){
    localStorage.removeItem('currentUser');
    
   
  }
  calling(callback: any) {
    this.val.subscribe(sub => {
      callback(sub);
    });
  }

}
