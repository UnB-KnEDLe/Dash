import { useState } from 'react';
import { Container } from '../../styles/search';
import { TableContainer } from '../../styles/table';

import Table from "../../components/table/Table";
import Filters from '../../components/Filter';
import Pagination from '../../components/table/Pagination';
import Export from '../../components/table/Export';

import { useHeading, useContent,
	useError, useModalData,
	useCurrentPage, useItemsPerPage,
	useFilters, useContentCount } from "../../context/searchContext";
import { useEffect } from 'react';
import { Toolbar } from '../../styles/toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
	const { heading } = useHeading();
	const { content } = useContent();
	const { error } = useError();
	const { modalData, setModalData } = useModalData();
	const { currentPage, setCurrentPage } = useCurrentPage();
	const { itemsPerPage, setItemsPerPage } = useItemsPerPage();
	const { onSubmit } = useFilters();
	const { contentCount } = useContentCount();

	const [ showColumnFilter, setShowColumnFilter ] = useState(false);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect( () => onSubmit(), [currentPage, itemsPerPage])
	
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
					<Toolbar>
						<div className="left-toolbar">
							<h2>Resultado</h2>
							<div className="export">
								<Export content={content.map(item => item.entities)} columns={heading} />
							</div>
						</div>

						<div className="right-toolbar">
							<div className="column-filter">
								<button onClick={() => setShowColumnFilter(i => !i)}><FontAwesomeIcon icon={faFilter}/></button>
							</div>
							<div className="pagination">
								<Pagination
									contentCount={contentCount}
									currentPage={currentPage}
									setCurrentPage={setCurrentPage}
									itemsPerPage={itemsPerPage}
									setItemsPerPage={setItemsPerPage}
									showAll
								/>
							</div>
						</div>
					</Toolbar>
					<div className="table-container">
						<Table
							data={content}
							columns={heading}
							showEntities={true}
							modalData={modalData}
							setModalData={setModalData}
							showColumnFilter={showColumnFilter}
						/>
					</div>
				</TableContainer>
			) }
		</>
	);
}