const BASE_URL = 'http://164.41.76.30/dodfminner/api'

export const actsData = {
    abono: {
        search: true,
        title: 'Abono de Permanência',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/abono?`
    },

    aposentadoria: {
        search: true,
        title: 'Aposentadoria',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/aposentadoria?`
    },

    cessao: {
        search: true,
        title: 'Cessão',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo_cedido', title: 'Cargo Cedido'},
        ],
        base_url: `${BASE_URL}/cessao?`
    },

    cessoes: {
        title: 'Cessão',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo_cedido', title: 'Cargo Cedido'},
        ],
        base_url: `${BASE_URL}/cessao?`
    },

    contrato: {
        title: 'Contrato',
    },

    nomeacao_comissionada: {
        search: true,
        title: 'Nomeação Comissionada',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo_efetivo', title: 'Cargo Efetivo'},
            {label: 'cargo_comissionado', title: 'Cargo Comissionado'},
            {label: 'orgao', title: 'Órgão'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/nomeacao_comissionada?`
    },

    nomeacao: {
        title: 'Nomeação Comissionada',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo_efetivo', title: 'Cargo Efetivo'},
            {label: 'cargo_comissionado', title: 'Cargo Comissionado'},
            {label: 'orgao', title: 'Órgão'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/nomeacao_comissionada?`
    },

    nomeacao_efetiva: {
        search: true,
        title: 'Nomeação Efetiva',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
            {label: 'edital', title: 'Edital'},
            {label: 'matricula', title: 'Matrícula'},
        ],
        
        base_url: `${BASE_URL}/nomeacao_efetiva?`
    },

    efetivos_nome: {
        title: 'Nomeação Efetiva',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
            {label: 'edital', title: 'Edital'},
            {label: 'matricula', title: 'Matrícula'},
        ],
        
        base_url: `${BASE_URL}/nomeacao_efetiva?`
    },

    exoneracao_efetivos: {
        search: true,
        title: 'Exoneração de Cargo Efetivo',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exo_efetivo?`
    },

    efetivos_exo: {
        title: 'Exoneração de Cargo Efetivo',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exo_efetivo?`
    },
    
    exoneracao: {
        search: true,
        title: 'Exoneração de Cargo Comissionado',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exoneracao?`
    },

    retificacao: {
        search: true,
        title: 'Retificação',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/retificacao?`
    },

    retificacoes: {
        title: 'Retificação',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/retificacao?`
    },

    reversao: {
        search: true,
        title: 'Reversão',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],
        base_url: `${BASE_URL}/reversao?`
    },

    reversoes: {
        title: 'Reversão',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],
        base_url: `${BASE_URL}/reversao?`
    },

    substituicao: {
        search: true,
        title: 'Substituição',
        paramsKeys: [
            {label: 'substituto', title: 'Nome do Substituto'},
            {label: 'cargo_substituto', title: 'Cargo do Substituto'},
            {label: 'substituido', title: 'Nome do Substituído'},
            {label: 'cargo_substituido', title: 'Cargo do Substituído'},
        ],
        base_url: `${BASE_URL}/substituicao?`
    },

    tornado_sem_efeito: {
        search: true,
        title: 'Tornado Sem Efeito Atos de Aposentadoria',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'ordem_servico', title: 'Ordem de Serviço'},
            {label: 'dodf', title: 'DODF'},
        ],
        base_url: `${BASE_URL}/tornado_sea?`
    },

    sem_efeito_aposentadoria: {
        title: 'Tornado Sem Efeito Atos de Aposentadoria',
        base_url: `${BASE_URL}/tornado_sea?`
    },

}