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
    quadro: 'Quadro',
    cargo: 'Cargo',
    nome: 'Nome',
    vigencia: 'Vigência',
    matricula_siape: 'Matrícula SIAPE',
    Lotacao: 'Lotação',
    cargo_efetivo: 'Cargo Efetivo',
    cargo_comissao: 'Cargo Comissão',
    ordem_servico: 'Ordem de Serviço',
    dodf: 'DODF',
    tipo_documento: 'Tipo de Documento',
    dodf_data: 'Data do DODF',
    empresa_ato: 'Empresa',
    fund_legal: 'Fundamento Legal',
    cod_matricula_ato: 'Matrícula',
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
    orgao_cessionario: 'Órgão Cessionário',
    orgao_cedente: 'Órgão Cedente',
    cargo_orgao_cessionario: 'Cargo do Órgão Cessionário',
    nome_substituido: 'Nome do Substituído',
    matricula_substituido: 'Matrícula do Substituído',
    data_dodf: 'Data do DODF',
    numero: 'Número',
    numero_dodf: 'Número do DODF',
    pagina_dodf: 'Página do DODF',
    informacao_errada: 'Informação Errada',
    informacao_corrigida: 'Informação Corrigida',
    numero_documento: 'Número do Documento',
    data_documento: 'Data do Documento',
    tipo_edicao: 'Tipo de Edição',
    a_pedido_ou_nao: 'A pedido ou não',
}

export const columnsReplace = columnName => {
    if (columnName.toLowerCase() in columnsLabels) {
        return columnsLabels[columnName.toLowerCase()];
    } else return columnName.replaceAll('_', ' ');
}