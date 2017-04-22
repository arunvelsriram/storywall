import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { IMingleService } from './imingle-service';
import { Card } from './card';
import { environment } from '../environments/environment';

@Injectable()
export class MingleService implements IMingleService {
	constructor(private jsonp: Jsonp) { }

	getCards(): Observable<Card[]> {
		return this.jsonp.get(`${environment.mingleApiUrl}?mql=${this.mql()}&callback=JSONP_CALLBACK`)
			.map((response: Response) => response.json())
			.map(cards => cards.map(card => {
				return new Card(card['Number'], card['Name'], card['Status'], card['Owner'], card['Owner 2']);
			}));
	}

	getLaneNames(): String[] {
		return environment.laneNames;
	}

	private mql(): String {
		return encodeURI(environment.mql).replace(/&/g, '%26');
	}
}
