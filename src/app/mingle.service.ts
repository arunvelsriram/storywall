import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Card } from './card';
import { environment } from '../environments/environment';

@Injectable()
export class MingleService {
	constructor(private jsonp: Jsonp) { }

	getCards(): Observable<Card[]> {
		return this.jsonp.get(`${environment.mingleApiUrl}/cards/execute_mql.json?mql=SELECT%20number,%20name,%20status,%20owner,%20%27owner%202%27&callback=JSONP_CALLBACK`)
			.map((response: Response) => response.json())
			.map(cards => cards.map(card => {
				return new Card(card['Number'], card['Name'], card['Status'], card['Owner'], card['Owner 2']);
			}));
	}

	getLaneNames(): string[] {
		return environment.laneNames;
	}
}
