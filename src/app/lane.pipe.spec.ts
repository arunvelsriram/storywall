import { LanePipe } from './lane.pipe';

describe('LanePipe', () => {
	it('should create an instance', () => {
		const pipe = new LanePipe();
		expect(pipe).toBeTruthy();
	});

	it('should filter cards by lane', () => {
		const pipe = new LanePipe();
		const allCards = [{
			number: 3327,
			name: 'Some story',
			lane: 'Dev',
			owner: 'Arun',
			another_owner: 'Prasanth'
		},
		{
			number: 3329,
			name: 'Some story',
			lane: 'QA',
			owner: 'Poornima',
			another_owner: 'Sravanthi'
		}];
		const qaCards = [allCards[1]];

		expect(pipe.transform(allCards, 'QA')).toEqual(qaCards);
	})
});
