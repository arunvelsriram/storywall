import { Component, OnInit } from '@angular/core';

import { Card } from './card';
import { MingleService } from './mingle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Story Wall';
  laneNames: String[];
  cards: Card[];
  hasErrors: Boolean = false;

  constructor(private mingleService: MingleService) { }

  ngOnInit(): void {
    this.laneNames = this.mingleService.getLaneNames();
    this.mingleService.getCards().subscribe(cards => {
      this.cards = cards;
    }, error => {
      this.hasErrors = true;
      console.error(error);
    });
  }
}
