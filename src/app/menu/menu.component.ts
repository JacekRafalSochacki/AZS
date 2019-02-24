import { Component, OnInit } from '@angular/core';
import {alerting} from "C:/Users/Pancio/WebstormProjects/AZS_lyzwy/AZS/src/assets/js/menu.animation.js"


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    window.onscroll= function() {
      growShrinkLogo();
    };

    var lastScroll=0;
    function growShrinkLogo() {
      var Logo = document.getElementById("logo");
      if ( document.documentElement.scrollTop  > lastScroll) {
        Logo.style.height = '50px';
      } else {
        Logo.style.height = '100px';
      }
      lastScroll=document.documentElement.scrollTop;
    }


  }

}
