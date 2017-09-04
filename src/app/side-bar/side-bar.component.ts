import { Component,EventEmitter,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output()
  em:EventEmitter<String>
  constructor() { 
    this.User="Hrishi",
    this.em=new EventEmitter<String>();
  }
User:String;
SH:String;
  ngOnInit() {
  }
  toggleSidebar(){
  
    document.getElementById("sidebar").classList.toggle('active');
  }
  showcomp(){
    this.em.emit('show')
    this.SH="SH";
  }

}
