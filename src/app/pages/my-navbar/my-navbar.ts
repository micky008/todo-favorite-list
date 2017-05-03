import { Component } from '@angular/core';

@Component({
  selector: 'my-navbar',
  templateUrl: './my-navbar.html',
  styleUrls : ['./my-navbar.css']
})
export class AppNavbar  {
  isIn = false;

  toggleState(){
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
}
