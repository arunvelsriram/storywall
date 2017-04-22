export const CONFIG = {
	mingleApiUrl: 'https://tw-digital.mingle.thoughtworks.com/api/v2/projects/tw_dot_com/cards/execute_mql.json',
	laneNames: ['Next', 'A & D', 'A & D done', 'Dev', 'Dev done', 'QA', 'QA done', 'Feature Toggle Off', 'Blocked on external dependencies', 'Blocked'],
	mql: `SELECT number, name, status, owner, 'owner 2'
		WHERE type in ('Story', 'Defect', 'Power Ups', 'Spike')
		AND status in ('Next', 'A & D', 'A & D done', 'Dev', 'Dev done', 'QA', 'QA done', 'Feature Toggle Off', 'Blocked on external dependencies', 'Blocked')
		ORDER BY PROJECT_CARD_RANK`,
	// Project specific card properties
	// Storywall requires each cards number, name, lane it belongs to, and pair names
	// Out of which property name for card number and card name are fixed
	// Visit Card properties page on your Mingle account to find out the property name for Lane and Pair names
	cardProperties: {
		// Property name for card number
		// You don't have to modify this
		number: 'Number',

		// Property name for card title
		// You don't have to modify this
		name: 'Name',

		// Property name for lane
		// In my project this is called "Status"
		lane: 'Status',

		// Property name for pair's name
		// In my project this is called "Owner"
		owner: 'Owner',

		// Property name for another pair's name
		// In my project this is called "Owner 2"
		anotherOwner: 'Owner 2'
	}
};
