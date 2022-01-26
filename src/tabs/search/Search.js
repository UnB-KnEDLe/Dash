import { Container } from '../../styles/search';
import { TableContainer } from '../../styles/table';

import Table from "./Table";
import Filters from '../../components/Filter';
import Pagination from '../../components/table/Pagination';

import { useStart, useHeading, useContent, useError, useModalData, useCurrentPage, useItemsPerPage, useFilters, useContentCount } from "../../context/searchContext";

export default function Search() {
	const { start } = useStart();
	const { heading } = useHeading();
	const { content } = useContent();
	const { error } = useError();
	const { modalData, setModalData } = useModalData();
	const { currentPage, setCurrentPage } = useCurrentPage();
	const { itemsPerPage, setItemsPerPage } = useItemsPerPage();
	const { onSubmit } = useFilters();
	const { contentCount } = useContentCount();

	const handleCurrentPage = (page) => {
		setCurrentPage(page);
		onSubmit();
	}

	const handleItemsPerPage = (items) => {
		setItemsPerPage(items);
		onSubmit();
	}

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
				<TableContainer>
					<div className="toolbar">
						<h2>Resultado</h2>
						<div className="right-toolbar">
							<div className="pagination">
								<Pagination
									contentCount={contentCount}
									currentPage={currentPage}
									setCurrentPage={handleCurrentPage}
									itemsPerPage={itemsPerPage}
									setItemsPerPage={handleItemsPerPage}
									showAll
								/>
							</div>
						</div>
					</div>
					<div className="table-container">
						<Table
							data={content}
							columns={heading}
							showEntities={true}
							modalData={modalData}
							setModalData={setModalData}
						/>
					</div>
				</TableContainer>
			) }
			{ content.length === 0 && !start && <h2 style={{marginTop: 35}}>Não foram encontrados resultados com esses filtros.</h2>}
		</>
	);
}