import { Component, OnInit } from '@angular/core';

import { Card } from './card';
import { MingleService } from './mingle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  laneNames: String[];
  cards: Card[];

  constructor(private mingleService: MingleService) { }

  ngOnInit(): void {
    this.laneNames = this.mingleService.getLaneNames();
    this.mingleService.getCards().subscribe(cards => {
      this.cards = cards;
    }, error => {
      console.error(error);
      console.error('Please login to Mingle!');
      console.error('If you are already logged in pease check the configuration (config.ts).');
    });
  }
}
