import React from 'react';
import MUIDataTable from 'mui-datatables';
import { TableContainer } from '../styles/table_style';

export default function Table({title, data}) {
    const columns = {
        aposentadoria: ['SEI', 'Nome', 'Matrícula', 'Tipo de Aposentadoria', 'Cargo', 'Classe', 'Padrão', 'Quadro', 'Fundamento Legal', 'Vigência'],
        nomeacao: ['Nome', 'Cargo Efetivo', 'Matrícula', 'SIAPE', 'Smbolo', 'Cargo Comissão', 'Lotação', 'Órgão'],
        exoneracao: ['Nome', 'Matrícula', 'Símbolo', 'Cargo Comissão', 'Lotação', 'Órgão', 'Vigência', 'Pedido', 'Cargo Efetivo', 'SIAPE', 'Motivo'],
        abono: ['Nome do Servidor', 'Matrícula', 'Cargo Efetivo', 'Classe', 'Padrão', 'Quadro Pessoal Permanente ou Suplementar', 'Fundamento Legal do Abono de Permanência', 'Órgão', 'Processo GDF/SEI', 'Vigência', 'Matrícula SIAPE'],
        substituicao: ['Nome do Servidor Substituto', 'Matrícula do Substituto', 'Nome do Substituído', 'Matrícula do Substituído', 'Cargo', 'Símbolo do Cargo Substituto', 'Cargo Comissionado da Substituição', 'Símbolo do Cargo da Substituição', 'Símbolo do Cargo Comissionado da Substituição', 'Hierarquia da Lotação', 'Órgão', 'Data Inicial da Vigência', 'Data Final de Vigência', 'Matrícula SIAPE', 'Motivo'],
        efetivos_exo: ['Nome', 'Matrícula', 'Símbolo', 'Cargo Comissão', 'Lotação', 'Órgão', 'Vigência', 'Pedido', 'Cargo Efetivo', 'SIAPE', 'Motivo'],
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
                title={<h6 style={{fontSize: '189%', color: '#144e81', fontWeight: 'bold', textAlign: 'left'}}>{labelReplace[title]}</h6>}
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