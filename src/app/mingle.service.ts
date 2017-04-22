import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { IMingleService } from './imingle-service';
import { Card } from './card';
import { MqlEncoderService } from './mql-encoder.service';
import { environment } from '../environments/environment';

@Injectable()
export class MingleService implements IMingleService {
	constructor(private jsonp: Jsonp, private mqlEncoder: MqlEncoderService) { }

	getCards(): Observable<Card[]> {
		return this.jsonp.get(this.buildUrl().toString())
			.map((response: Response) => response.json())
			.map(cards => cards.map(card => {
				return new Card(card['Number'], card['Name'], card['Status'], card['Owner'], card['Owner 2']);
			}));
	}

	getLaneNames(): String[] {
		return environment.laneNames;
	}

	private buildUrl(): String {
		const encodedMql = this.mqlEncoder.encode(environment.mql);
		return `${environment.mingleApiUrl}?mql=${encodedMql}&callback=JSONP_CALLBACK`;
	}
}
