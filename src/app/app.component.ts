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
  lanes: String[];
  cards: Card[];

  constructor(private mingleService: MingleService) { }

  ngOnInit(): void {
    this.lanes = this.mingleService.getLaneNames();
    this.mingleService.getCards().subscribe(cards => {
      this.cards = cards;
    });
  }
}
