import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bgVariable:Boolean = false;
  headerVariable:Boolean = false;

  @HostListener('document:scroll')
  onScroll(){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      this.bgVariable = true;
      this.headerVariable = true;
    }else{
      this.bgVariable = false;
      this.headerVariable = false;
    }
  }

}
