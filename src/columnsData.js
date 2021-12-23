export const columnsData = {
    aposentadoria: ['SEI', 'Nome', 'Matrícula', 'Tipo de Aposentadoria', 'Cargo', 'Classe', 'Padrão', 'Quadro', 'Fundamento Legal', 'Vigência'],
    nomeacao: ['Símbolo', 'Matrícula', 'Órgão', 'SIAPE', 'Nome', 'Lotação', 'Cargo Comissão', 'Cargo Efetivo'],
    exoneracao: ['Nome', 'Matrícula', 'Símbolo', 'Cargo Comissão', 'Lotação', 'Órgão', 'Vigência', 'Pedido', 'Cargo Efetivo', 'SIAPE', 'Motivo'],
    abono: ['Nome do Servidor', 'Matrícula', 'Cargo Efetivo', 'Classe', 'Padrão', 'Quadro Pessoal Permanente ou Suplementar', 'Fundamento Legal do Abono de Permanência', 'Órgão', 'Processo GDF/SEI', 'Vigência', 'Matrícula SIAPE'],
    substituicao: ['Nome do Servidor Substituto', 'Matrícula do Substituto', 'Nome do Substituído', 'Matrícula do Substituído', 'Cargo', 'Símbolo do Cargo Substituto', 'Cargo Comissionado da Substituição', 'Símbolo do Cargo da Substituição', 'Símbolo do Cargo Comissionado da Substituição', 'Hierarquia da Lotação', 'Órgão', 'Data Inicial da Vigência', 'Data Final de Vigência', 'Matrícula SIAPE', 'Motivo'],
    efetivos_exo: ['Nome', 'Matrícula', 'Símbolo', 'Cargo Comissão', 'Lotação', 'Órgão', 'Vigência', 'Pedido', 'Cargo Efetivo', 'SIAPE', 'Motivo'],
    sem_efeito_aposentadoria: ['Tipo de Documento', 'Número do Documento', 'Data do Documento', 'Número do DODF', 'Data do DODF', 'Página do DODF', 'Nome', 'Matrícula', 'Matrícula SIAPE', 'Cargo Efetivo', 'Classe', 'Padrão', 'Quadro Pessoal', 'Órgão', 'Processo SEI'],
};

var columnsLabels = {
    classe: 'Classe',
    efetivo: 'Efetivo',
    padrao: 'Padrão',
    matricula: 'Matrícula',
    sei: 'SEI',
    simbolo: 'Símbolo',
    data_vigencia: 'Data de Vigência',
    fundamento_legal: 'Fundamento Legal',
    lotacao: 'Lotação',
    siape: 'SIAPE',
}

export const columnsReplace = (columnName) => {
    if (columnName in columnsLabels) {
        return columnsLabels[columnName];
    } else return columnName
}