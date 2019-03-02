import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(window).scroll(function (event) {
      growShrinkLogo();
      lastScroll = $(window).scrollTop();
    });
    var lastScroll=0;

      function growShrinkLogo() {
      if ($(window).scrollTop() >lastScroll) {
        $("#logo").height("50px");
        $(".nav-link").css("fontSize","1rem");
      } else {
        $("#logo").height("100px");
        $(".nav-link").css("fontSize","1.5rem");
      }
    }


  }

}
