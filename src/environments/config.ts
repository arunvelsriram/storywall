export const CONFIG = {
	mingleApiUrl: 'https://tw-digital.mingle.thoughtworks.com/api/v2/projects/tw_dot_com/cards/execute_mql.json',
	laneNames: ['Next', 'A & D', 'A & D done', 'Dev', 'Dev done', 'QA', 'QA done', 'Feature Toggle Off', 'Blocked on external dependencies', 'Blocked'],
	mql: `SELECT number, name, status, owner, 'owner 2'
		WHERE type in ('Story', 'Defect', 'Power Ups', 'Spike')
		AND status in ('Next', 'A & D', 'A & D done', 'Dev', 'Dev done', 'QA', 'QA done', 'Feature Toggle Off', 'Blocked on external dependencies', 'Blocked')
		ORDER BY PROJECT_CARD_RANK`,
};
