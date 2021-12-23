const BASE_URL = 'http://164.41.76.30/dodfminner/api'

export const actsTypes = {
    abono: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/abono?`
    },

    aposentadoria: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/aposentadoria?`
    },

    cessao: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo_cedido', title: 'Cargo Cedido'},
        ],
        base_url: `${BASE_URL}/cessao?`
    },

    nomeacao_comissionada: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'cargo_efetivo', title: 'Cargo Efetivo'},
            {label: 'cargo_comissionado', title: 'Cargo Comissionado'},
            {label: 'orgao', title: 'Órgão'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/nomeacao_comissionada?`
    },

    nomeacao_efetiva: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
            {label: 'edital', title: 'Edital'},
            {label: 'matricula', title: 'Matrícula'},
        ],
        
        base_url: `${BASE_URL}/nomeacao_efetiva?`
    },

    exoneracao_efetivos: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exo_efetivo?`
    },
    
    exoneracao: {
        paramsKeys: [
            {label: 'nome', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exoneracao?`
    },

    retificacao: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/retificacao?`
    },

    reversao: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],
        base_url: `${BASE_URL}/reversao?`
    },

    substituicao: {
        paramsKeys: [
            {label: 'substituto', title: 'Nome do Substituto'},
            {label: 'cargo_substituto', title: 'Cargo do Substituto'},
            {label: 'substituido', title: 'Nome do Substituído'},
            {label: 'cargo_substituido', title: 'Cargo do Substituído'},
        ],
        base_url: `${BASE_URL}/substituicao?`
    },

    tornado_sem_efeito: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'matricula', title: 'Matrícula'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'ordem_servico', title: 'Ordem de Serviço'},
            {label: 'dodf', title: 'DODF'},
        ],
        base_url: `${BASE_URL}/tornado_sea?`
    }

}