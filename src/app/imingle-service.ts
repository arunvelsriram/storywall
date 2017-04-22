import { Observable } from 'rxjs/Rx';

import { Card } from './card';

export interface IMingleService {
	getCards(): Observable<Card[]>;
	getLaneNames(): String[];
}
