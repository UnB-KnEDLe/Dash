import { Container } from '../../styles/search';

import Table from "./Table";
import Filters from '../../components/Filter';

import { useStart, useHeading, useContent, useError, useModalData } from "../../context/searchContext";

export default function Search() {
	const { start } = useStart();
	const { heading } = useHeading();
	const { content } = useContent();
	const { error } = useError();
	const { modalData, setModalData } = useModalData();

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
				<Table
					data={content}
					columns={heading}
					showEntities={true}
					modalData={modalData}
					setModalData={setModalData}
				/>
			) }
			{ content.length === 0 && !start && <h2 style={{marginTop: 35}}>Não foram encontrados resultados com esses filtros.</h2>}
		</>
	);
}