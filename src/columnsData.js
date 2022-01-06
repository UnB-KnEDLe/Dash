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
    siape: 'Matrícula SIAPE',
    a_pedido: 'A pedido',
    orgao: 'Órgão',
    nome: 'Nome',
    vigencia: 'Vigência',
    matricula_siape: 'Matrícula SIAPE',
    Lotacao: 'Lotação',
    cargo_efetivo: 'Cargo Efetivo',
    cargo_comissao: 'Cargo Comissão',
    tipo_documento: 'Tipo de Documento',
    dodf_data: 'Data do DODF',
    empresa_ato: 'Empresa',
    fund_legal: 'Fundamento Legal',
    cod_matricula_ato: 'Código Matrícula',
    nome_ato: 'Nome',
    cargo_substituto: 'Cargo do Substituto',
    matricula_substituto: 'Matrícula do Substituto',
    nome_substituto: 'Nome do Substituto',
    cargo_objeto_substituicao: 'Cargo do Objeto da Substituição',
    simbolo_objeto_substituicao: 'Símbolo do Objeto da Substituição',
    hierarquia_lotacao: 'Hierarquia da Lotação',
    data_inicial: 'Data Inicial',
    data_final: 'Data Final',
    simbolo_substituto: 'Símbolo do Substituto',
    processo_sei: 'Processo SEI',
}

export const columnsReplace = columnName => {
    if (columnName.toLowerCase() in columnsLabels) {
        return columnsLabels[columnName.toLowerCase()];
    } else return columnName
}