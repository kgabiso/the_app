import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'News feeds',
      url: 'first',
      icon: 'paper'
    },
    {
      title: 'Pay my bills',
      url: 'pay',
      icon: 'card'
    },
    {
      title: 'About us',
      url: 'about',
      icon: 'business'
    },
    {
      title: 'Contact us',
      url: 'contact',
      icon: 'contacts'
    },
    {
      title: 'log out',
      url: 'logout',
      icon: 'log-out'
    }
  ];

  selectedPage = '';
  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   this.selectedPage = event.url;
    //   console.log(event.url);
    // });
  }
  onChangeMenu(event) {
    this.router.navigateByUrl('menu/' + event.url);
  }
}
