import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableContainer } from '../styles/table_style';

export default function Table({title, data}) {
    const columns = {
        aposentadoria: ['SEI', 'Nome', 'Matrícula', 'Tipo de Aposentadoria', 'Cargo', 'Classe', 'Padrao', 'Quadro', 'Fundamento Legal', 'Vigência'],
        nomeacao: ['Nome', 'Cargo Efetivo', 'Matricula', 'SIAPE', 'Simbolo', 'Cargo Comissao', 'Lotação', 'Orgao'],
        exoneracao: ['Nome', 'Matrícula', 'Símbolo', 'Cargo Comissao', 'Lotação', 'Órgão', 'Vigência', 'Pedido', 'Cargo Efetivo', 'SIAPE', 'Motivo'],
        abono: ['Nome do Servidor', 'Matrícula', 'Cargo Efetivo', 'Classe', 'Padrão', 'Quadro pessoal permanente ou Suplementar', 'Fundamento Legal do abono de permanência', 'Órgão', 'Processo GDF/SEI', 'Vigencia', 'Matricula SIAPE'],
        substituicao: ['Nome do Servidor Substituto', 'Matrícula do Substituto', 'Nome do Substituido', 'Matrícula do Substituido', 'Cargo', 'Símbolo do cargo substituto', 'Cargo comissionado da substituição', 'Símbolo do cargo da substituição', 'Símbolo do cargo comissionado da substituição', 'Hierarquia da Lotação', 'Órgão', 'Data Inicial da Vigência', 'Data Final de Vigência', 'Matrícula SIAPE', 'Motivo'],
        efetivos_exo: ['Nome', 'Matrícula', 'Símbolo', 'Cargo Comissao', 'Lotação', 'Órgão', 'Vigência', 'Pedido', 'Cargo Efetivo', 'SIAPE', 'Motivo'],
        sem_efeito_aposentadoria: ['Tipo de Documento', 'Número do Documento', 'Data do Documento', 'Número do DODF', 'Data do DODF', 'Página do DODF', 'Nome', 'Matrícula', 'Matrícula SIAPE', 'Cargo Efetivo', 'Classe', 'Padrão', 'Quadro Pessoal', 'Órgão', 'Processo SEI'],
    };

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
        <TableContainer>
            <MUIDataTable
                title={labelReplace[title]}
                data={data}
                columns={columns[title]}
                options={{
                    rowsPerPage: 3,
                    rowsPerPageOptions: [3, 10, 20, 30],
                    selectableRows: false
                }}
            />
        </TableContainer>
    );
}