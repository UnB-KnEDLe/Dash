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

        base_url: `${BASE_URL}/abono?`,
        color: "#a3218e"
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

        base_url: `${BASE_URL}/aposentadoria?`,
        color: "#592f93"
    },

    cessao: {
        search: true,
        title: 'Cessão',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo_cedido', title: 'Cargo Cedido'},
        ],
        base_url: `${BASE_URL}/cessao?`,
        color: "#21409a"
    },

    cessoes: {
        title: 'Cessão',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo_cedido', title: 'Cargo Cedido'},
        ],
        base_url: `${BASE_URL}/cessao?`,
        color: "#21409a"
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

        base_url: `${BASE_URL}/nomeacao_comissionada?`,
        color: "#72bd46"
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

        base_url: `${BASE_URL}/nomeacao_comissionada?`,
        color: "#72bd46"
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
        
        base_url: `${BASE_URL}/nomeacao_efetiva?`,
        color: "#0465b2"
    },

    exoneracao_efetivos: {
        search: true,
        title: 'Exoneração de Cargo Efetivo',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exo_efetivo?`,
        color: "#00acac"
    },

    efetivos_exo: {
        title: 'Exoneração de Cargo Efetivo',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exo_efetivo?`,
        color: "#00acac"
    },
    
    exoneracao: {
        search: true,
        title: 'Exoneração de Cargo Comissionado',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exoneracao?`,
        color: "#03a45e"
    },

    retificacao: {
        search: true,
        title: 'Retificação',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/retificacao?`,
        color: "#fef102"
    },

    retificacoes: {
        title: 'Retificação',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/retificacao?`,
        color: "#fef102"
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
        base_url: `${BASE_URL}/reversao?`,
        color: "#f8a51b"
    },

    reversoes: {
        title: 'Reversão',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],
        base_url: `${BASE_URL}/reversao?`,
        color: "#f8a51b"
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
        base_url: `${BASE_URL}/substituicao?`,
        color: "#f58225"
    },

    tornado_sem_efeito: {
        search: true,
        title: 'Tornada Sem Efeito Atos de Aposentadoria',
        paramsKeys: [
            {label: 'pessoa', title: 'Nome'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'ordem_servico', title: 'Ordem de Serviço'},
            {label: 'dodf', title: 'DODF'},
        ],
        base_url: `${BASE_URL}/tornado_sea?`,
        color: "#ed403c"
    }

}