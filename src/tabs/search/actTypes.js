const BASE_URL = 'http://164.41.76.30/dodfminner/api'

export const actsTypes = {
    abono: {
        paramsKeys: [
            'pessoa',
            'cargo',
            'orgao'
        ],

        base_url: `${BASE_URL}/abono?`
    },

    aposentadoria: {
        paramsKeys: [
            'pessoa',
            'cargo',
            'orgao',
            'matricula',
        ],

        base_url: `${BASE_URL}/aposentadoria?`
    },

    nomeacao_comissionada: {
        paramsKeys: [
            'pessoa',
            'cargo_efetivo',
            'cargo_comissionado',
            'orgao',
            'matricula',
        ],

        base_url: `${BASE_URL}/nomeacao_comissionada?`
    },

    nomeacao_efetiva: {
        paramsKeys: [
            'pessoa',
            'cargo',
            'orgao',
            'edital',
            'matricula',
        ],
        
        base_url: `${BASE_URL}/nomeacao_efetiva?`
    },

    exoneracao_efetivos: {
        paramsKeys: [
            'pessoa',
            'cargo',
            'orgao'
        ],

        base_url: `${BASE_URL}/exo_efetivo?`
    },

    retificacao: {
        paramsKeys: [
            'pessoa',
            'matricula',
        ],

        base_url: `${BASE_URL}/retificacao?`
    },


    exoneracao_nao_efetivos: {
        paramsKeys: [
            'nome',
            'cargo',
            'orgao'
        ],

        base_url: `${BASE_URL}/exoneracao?`
    },
}