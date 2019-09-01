import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss']
})
export class FirstPage implements OnInit {
  newsFeeds = [
    {
      subtitle: 'Card Subtitle',
      title: 'Card Title',
      content:
        " Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      img: '../../../assets/rotator_2.jpg'
    },
    {
      subtitle: 'Card Subtitle',
      title: 'Card Title',
      content:
        " Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      img: '../../../assets/rotator_4.jpg'
    },
    {
      subtitle: 'Card Subtitle',
      title: 'Card Title',
      content:
        " Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      img: '../../../assets/rotator_5-1.jpg'
    },
    {
      subtitle: 'Card Subtitle',
      title: 'Card Title',
      content:
        " Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
      img: '../../../assets/rotator_6-1.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
