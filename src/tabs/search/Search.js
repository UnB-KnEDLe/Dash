import { Container } from '../../styles/search';

import { TableContent } from "../../styles/table_style";
import MUIDataTable from 'mui-datatables';
import ExpandText from "../../components/expandText";
import { TableContainer } from "../../styles/table_style";
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
					<TableContainer color={actsData[actType].color} >
						<MUIDataTable
							className="mui-table"
							title={<h6 style={{fontSize: '189%', color: '#144e81', fontWeight: 'bold', textAlign: 'left'}}>{actsData[actType].title}</h6>}
							data={content.map((row) => row.map(cell => <ExpandText text={cell} />) )}
							columns={heading.map(column => columnsReplace(column))}
							options={{
								rowsPerPage: 100,
								selectableRows: 'none',
								download: false,
								print: false,
								filter: false,
								search: false
							}}
						/>
					</TableContainer>
				</TableContent>
			) }
			{ content.length === 0 && !start && <h2>Não foram encontrados resultados com esses filtros.</h2>}
		</>
	);
}