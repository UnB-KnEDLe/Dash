import { Dots } from "../../assets/dots/dots";

export const cypherConfig = {
    server_url: "neo4j://164.41.76.30:8080",

    labels: {
        Pessoa: {
            caption: () => "",
            image: Dots.dot,
        },

        Orgao: {
            caption: () => "",
            image: Dots.dot_1,
        },

        Cargo: {
            caption: () => "",
            image: Dots.dot_2,
        },

        Dodf: {
            caption: () => "",
            image: Dots.dot_3,
        },

        Documento: {
            caption: () => "",
            image: Dots.dot_4,
        },

        EditalNormativo: {
            caption: () => "",
            image: Dots.dot_5,
        },
    },

    relationships: {
        EH_EXONERADA: {
            caption: false,
        },

        PERTENCE_AO: {
            caption: false,
        },

        RECEBE_ABONO_DO: {
            caption: false,
        },

        EXERCE: {
            caption: false,
        },

        APOSENTA_DE: {
            caption: false,
        },

        CEDIDO_A: {
            caption: false,
        },

        APOSENTADORIA_RETIFICADA_NA: {
            caption: false,
        },

        PUBLICADO_NO: {
            caption: false,
        },

        APROVADO_NO: {
            caption: false,
        },

        NOMEADO_PARA: {
            caption: false,
        },

        EXERCIA: {
            caption: false,
        },

        SUBSTITUI: {
            caption: false,
        },

        REVERTE_AO: {
            caption: false,
        },
    },
};
