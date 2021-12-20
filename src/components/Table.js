import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableContainer } from '../styles/table_style';
import ExpandText from './expandText';
import { columnsData } from '../columnsData';

import { actsData } from '../actsData';

export default function Table({title, data}) {
    const labelReplace = {
        aposentadoria: 'Aposentadoria',
        nomeacao: 'Nomeação',
        exoneracao: 'Exoneração',
        abono: 'Abono',
        substituicao: 'Substituição',
        efetivos_exo: 'Exoneração de Efetivos',
        sem_efeito_aposentadoria: 'Tornado Sem Efeito a Aposentadoria',
    }

    return (
        <TableContainer color={actsData[title].color} >
            <MUIDataTable
                className="mui-table"
                title={<h6 style={{fontSize: '189%', color: '#144e81', fontWeight: 'bold', textAlign: 'left'}}>{labelReplace[title]}</h6>}
                data={data.map((row) => row.map((cell) => <ExpandText text={cell} />) )}
                columns={columnsData[title]}
                options={{
                    rowsPerPage: 3,
                    rowsPerPageOptions: [3, 10, 20, 30],
                    selectableRows: 'none'
                }}
            />
        </TableContainer>
    );
}