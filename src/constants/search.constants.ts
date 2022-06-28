export interface FilterFieldsProps {
  cessao?: {
    pessoa?: string;
    matricula?: string;
    cargo_cedido?: string;
  }
  nomeacao_comissionada?: {
    pessoa?: string;
    cargo_efetivo?: string;
    cargo_comissionado?: string;
    orgao?: string;
    matricula?: string;
  }
  nomeacao_efetiva?: {
    pessoa?: string;
    edital?: string;
    cargo?: string;
    orgao?: string;
    matricula?: string;
  }
  exo_efetivo?: {
    pessoa?: string;
    cargo?: string;
    orgao?: string;
  }
  exoneracao?: {
    pessoa?: string;
    cargo?: string;
    orgao?: string;
  }
  abono?: {
    pessoa?: string;
    cargo?: string;
    orgao?: string;
  }
  retificacao?: {
    pessoa?: string;
    matricula?: string;
  }
  aposentadoria?: {
    pessoa?: string;
    cargo?: string;
    orgao?: string;
    matricula?: string;
  }
  tornado_sea?: {
    pessoa?: string;
    matricula?: string;
    cargo?: string;
    tipo_fonte_data?: string;
    dodf_data?: string;
    tipo_fonte_numero?: string;
    dodf_numero?: string;
  }
  reversao?: {
    pessoa?: string;
    matricula?: string;
    cargo?: string;
    orgao?: string;
  }
  substituicao?: {
    substituto?: string;
    cargo_substituto?: string;
    matricula_substituto?: string;
    substituido?: string;
    cargo_substituido?: string
    matricula_substituido?: string
  }
}

export enum FIELDS {
  "Cargo" = "cargo",
  "Órgão" = "orgao",
  "Nome" = "pessoa",
  "Matrícula" = "matricula",
  "Cargo Cedido" = "cargo_cedido",
  "Cargo Comissionado" = "cargo_comissionado",
  "Cargo Efetivo" = "cargo_efetivo",
  "Edital" = "edital",
  "Cargo do Substituído" = "cargo_substituido",
  "Cargo do Substituto" = "cargo_substituto",
  "Matrícula do Substituído" = "matricula_substituido",
  "Matrícula do Substituto" = "matricula_substituto",
  "Nome do Substituto" = "substituido",
  "Nome do Substituído" = "substituto" ,
}

export const SAME_BOTTOM_MAX_2 = {
  1: "-134px",
  2: "-134px",
  3: "-52px",
  4: "-52px",
  5: "30px",
  6: "30px",
  7: "112px",
  8: "112px",
}

export const SAME_BOTTOM_MAX_4 = {
  1: "-184px",
  2: "-184px",
  3: "-102px",
  4: "-102px",
  5: "-20px",
  6: "-20px",
  7: "62px",
  8: "62px",
}

export const SAME_BOTTOM_MAX_6 = {
  1: "-224px",
  2: "-224px",
  3: "-142px",
  4: "-142px",
  5: "-60px",
  6: "-60px",
  7: "22px",
  8: "22px",
}

export const SAME_BOTTOM_MAX_7 = {
  1: "-274px",
  2: "-274px",
  3: "-192px",
  4: "-192px",
  5: "-110px",
  6: "-110px",
  7: "-28px",
  8: "-28px",
}

export const BOTTOM_SEARCH = {
  tornado_sea: SAME_BOTTOM_MAX_7,
  substituicao: SAME_BOTTOM_MAX_6,
  reversao: SAME_BOTTOM_MAX_4,
  aposentadoria: SAME_BOTTOM_MAX_4,
  cessao: SAME_BOTTOM_MAX_4,
  exo_efetivo: SAME_BOTTOM_MAX_4,
  exoneracao: SAME_BOTTOM_MAX_4,
  abono: SAME_BOTTOM_MAX_4,
  retificacao: SAME_BOTTOM_MAX_2,
  nomeacao_comissionada: SAME_BOTTOM_MAX_6,
  nomeacao_efetiva: SAME_BOTTOM_MAX_6,
} 