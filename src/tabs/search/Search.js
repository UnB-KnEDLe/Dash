import { Container } from '../../styles/search';

import { TableContent } from "../../styles/table_style";
import Table from "../../components/Table";
import { actsData } from "../../actsData";
import { columnsReplace } from "../../columnsData";

import Filters from '../../components/Filter';

import { useStart, useActType, useHeading, useContent, useError } from "../../context/searchContext";

export default function Search() {
	const { start } = useStart();
	const { heading } = useHeading();
	const { content } = useContent();
	const { actType } = useActType();
	const { error } = useError();

	return (
		<>
			<Container>
				<div className="search-header">
					<h2>Pesquisa no Diário Oficial do Distrito Federal</h2>
				</div>
				<Filters/>
				{ error.length > 0 && <h3>{error}</h3> }

			</Container>
			{ content.length > 0 && (
				<TableContent style={{width: '100%'}}>
					<Table data={content} color={actsData[actType].color} columns={heading.map(column => columnsReplace(column))} title={actsData[actType].title}/>
				</TableContent>
			) }
			{ content.length === 0 && !start && <h2>Não foram encontrados resultados com esses filtros.</h2>}
		</>
	);
}