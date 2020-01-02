import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 X="RANDOM DATA";
 y:number = 1;
 z= true;
  constructor() { }

  ngOnInit() {
    this.X=this.X;

  }
  fnclick(){
    this.X=this.X+" "+"new";
  }

}
