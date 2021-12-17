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

    retificacao: {
        paramsKeys: [
            {label: 'pessoa', title: 'Pessoa'},
            {label: 'matricula', title: 'Matrícula'},
        ],

        base_url: `${BASE_URL}/retificacao?`
    },


    exoneracao_nao_efetivos: {
        paramsKeys: [
            {label: 'nome', title: 'Nome'},
            {label: 'cargo', title: 'Cargo'},
            {label: 'orgao', title: 'Órgão'},
        ],

        base_url: `${BASE_URL}/exoneracao?`
    },
}