import { NEOVIS_DEFAULT_CONFIG, NEOVIS_ADVANCED_CONFIG } from 'neovis.js';

export default function config(visRef, user, cypher ) {
return ({
	containerId: visRef?.current?.id,
  neo4j: {
    serverUser: user.username,
    serverPassword: user.password,
    serverUrl: 'neo4j://164.41.76.30:8080',
  },
  initialCypher: cypher,
  [NEOVIS_DEFAULT_CONFIG]: {
    title: 'nome',
  },
  labels: {
    Pessoa: {
      [NEOVIS_ADVANCED_CONFIG]: {
        static: {
          color: '#2980B9',
        },
      },
    },
    Orgao: {
      [NEOVIS_ADVANCED_CONFIG]: {
        static: {
          color: '#99A8F4',
        },
      },
    },
    Cargo: {
      [NEOVIS_ADVANCED_CONFIG]: {
        static: {
          color: '#7CE9B5',
        },
      },
    },
    Dodf: {
      [NEOVIS_ADVANCED_CONFIG]: {
        static: {
          color: '#B9AB29',
        },
      },
    },
    Documento: {
      [NEOVIS_ADVANCED_CONFIG]: {
        static: {
          color: '#7B67B2',
        },
      },
    },
    EditalNormativo: {
      [NEOVIS_ADVANCED_CONFIG]: {
        static: {
          color: '#B22121',
        },
      },
    },
  },
})};
