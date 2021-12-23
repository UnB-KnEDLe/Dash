import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableContainer } from '../styles/table_style';
import ExpandText from './expandText';
import { columnsData } from '../columnsData';

import { actsData } from '../actsData';

export default function Table({title, data}) {
    const labelReplace = {
        abono: "Abono",
        aposentadoria: "Aposentadoria",
        cessao: "Cessão",
        exoneracao_efetivos: "Exoneração Efetivos",
        exoneracao: "Exoneração Não Efetivos",
        nomeacao_comissionada: "Nomeação Comissionada",
        nomeacao: "Nomeação",
        nomeacao_efetiva: "Nomeação Efetiva",
        retificacao: "Retificação",
        reversao: "Reversão",
        substituicao: "Substituição",
        tornado_sem_efeito: "Tornada Sem Efeito a Aposentadoria",
        sem_efeito_aposentadoria: 'Tornado Sem Efeito a Aposentadoria',
    }


    console.log(title, data)

    return (
        <TableContainer color={actsData[title].color} >
            <MUIDataTable
                className="mui-table"
                title={<h6 style={{fontSize: '189%', color: '#144e81', fontWeight: 'bold', textAlign: 'left'}}>{labelReplace[title]}</h6>}
                data={data.map((row) => row.map((cell) => <ExpandText text={cell} />) )}
                columns={columnsData[title]}
                options={{
                    rowsPerPage: 5,
                    rowsPerPageOptions: [3, 10, 20, 30],
                    'selectableRows': 'none'
                }}
            />
        </TableContainer>
    );
}