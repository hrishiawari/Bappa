import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { 
    this.User="Hrishi"
  }
User:String;

  ngOnInit() {
  }
  toggleSidebar(){

    document.getElementById("sidebar").classList.toggle('active');
  }

}
