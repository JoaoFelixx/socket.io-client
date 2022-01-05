import styled from 'styled-components';

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas: 'groupInfo messages messages';
	grid-template-rows: 100vh;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-areas: 'messages' 
												 'messages';
	}
`;

export default GridContainer;