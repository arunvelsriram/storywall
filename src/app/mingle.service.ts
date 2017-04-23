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
		const cardProperties = environment.cardProperties;

		return this.jsonp.get(this.buildUrl().toString())
			.map((response: Response) => response.json())
			.map(cards => cards.map(card => {
				return new Card(
					card[cardProperties.number],
					card[cardProperties.name],
					card[cardProperties.lane],
					card[cardProperties.owner],
					card[cardProperties.anotherOwner]
				);
			}))
			.catch(this.handleError);
	}

	getLaneNames(): String[] {
		return environment.laneNames;
	}

	private buildUrl(): String {
		const encodedMql = this.mqlEncoder.encode(environment.mql);
		return `${environment.mingleApiUrl}?mql=${encodedMql}&callback=JSONP_CALLBACK`;
	}

	private handleError(error: Response | any) {
		let errMsg: string;
  	if (error instanceof Response) {
    	const body = error.json() || '';
    	const err = body.error || JSON.stringify(body);
    	errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  	} else {
    	errMsg = error.message ? error.message : error.toString();
  	}
  	return Observable.throw(errMsg);
	}
}
