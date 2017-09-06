import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import {LoginOutService} from '../AllServices/login-out.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output()
  em:EventEmitter<String>
  constructor(
    private LoginOutService: LoginOutService
  ) { 
   
    this.em=new EventEmitter<String>();
    
  }
User:String;
SH:boolean;
isLogin:boolean=false;

  ngOnInit() {
   
    this.LoginOutService.calling(dt => {
     
      this.isLogin=dt.isLogin;
      this.User=dt.User;
     
    });
  
  
  }
  Logout(){
  this.LoginOutService.logout();
  this.isLogin=false
  this.SH=false;
  this.User=null
  }

  toggleSidebar(){
  
    document.getElementById("sidebar").classList.toggle('active');
  }
  showcomp(){
    this.em.emit('show')
    this.SH=true;
  }

}
