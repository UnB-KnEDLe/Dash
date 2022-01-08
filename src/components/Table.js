import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableContainer } from '../styles/table_style';
import ExpandText from './expandText';
import { columnsReplace } from '../columnsData';

export default function Table({title, data, columns, color}) {
    const labelReplace = {
        abono: "Abono",
        aposentadoria: "Aposentadoria",
        cessao: "Cessão",
        cessoes: "Cessão",
        exoneracao_efetivos: "Exoneração Efetivos",
        efetivos_exo: "Exoneração Efetivos",
        exoneracao: "Exoneração Não Efetivos",
        nomeacao_comissionada: "Nomeação Comissionada",
        nomeacao: "Nomeação",
        nomeacao_efetiva: "Nomeação Efetiva",
        retificacao: "Retificação",
        retificacoes: "Retificação",
        reversao: "Reversão",
        substituicao: "Substituição",
        tornado_sem_efeito: "Tornada Sem Efeito a Aposentadoria",
        sem_efeito_aposentadoria: 'Tornado Sem Efeito a Aposentadoria',
    }

    columns = columns.map(column => columnsReplace(column));
    title = labelReplace[title] ? labelReplace[title] : title;

    data = data.filter(row => {
        return row.some(el => typeof el !== 'object' && el !== null);
    });

    return (
        <TableContainer color={color} >
            <MUIDataTable
                className="mui-table"
                title={<h6 style={{fontSize: '189%', color: '#144e81', fontWeight: 'bold', textAlign: 'left'}}>{title}</h6>}
                data={data.map((row) => row.some(el => el == null || typeof el === 'object') && row.map((cell) => <ExpandText text={cell} />)) }
                columns={columns}
                options={{
                    rowsPerPage: 10,
                    rowsPerPageOptions: [3, 10, 20, 30],
                    'selectableRows': 'none',
                    download: false,
                    print: false,
                    filter: false
                }}
            />
        </TableContainer>
    );
}