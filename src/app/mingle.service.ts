import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Card } from './card';

const AVAILABLE_LANES = ['Dev', 'QA'];

@Injectable()
export class MingleService {
	private cardsUrl = 'api/cards';

	constructor(private http: Http) { }

	getCards(): Promise<Card[]> {
		return this.http.get(this.cardsUrl)
			.toPromise()
			.then(response => response.json().data as Card[])
			.catch(this.handleError);
	}

	getLanes(): string[] {
		return AVAILABLE_LANES;
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
