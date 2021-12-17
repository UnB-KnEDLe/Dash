import { Container } from '../../styles/search';

export function AdvancedSearch() {
	return (
		<Container>
			<div className="search-header">
				<h2>Hub de pesquisa avançada do DoDFMiner</h2>
				<h3>Realize pesquisas avançadas nos dados obtidos pela ferramenta.</h3>
			</div>
			<textArea width="100%" height="400px" placeholder="Digite aqui sua pesquisa" />
			<hr/>
			<iframe title="neo4j iframe" src="http://164.41.76.30/browser/" width="100%" height="400px" />
		</Container>
	);
}

const AdvancedSearchData = {
	title: "Pesquisa Avançada"
};

export default AdvancedSearchData;
