export const ENDPOINT_ACTS = {
  cessionAct: "cessao",
  commissionedAppointmentAct: "nomeacao_comissionada",
  effectiveAppointmentAct: "nomeacao_efetiva",
  effectiveDischargeAct: "exo_efetivo",
  nonEffectiveDischargeAct: "exoneracao",
  permanenceSubscriptionAct: "abono",
  rectificationAct: "retificacao",
  retirementAct: "aposentadoria",
  retirementNullificationAct: "tornado_sea",
  reversionAct: "reversao",
  substitutionAct: "substituicao"
}

export interface FilterFieldsProps {
  cessionAct: {
    pessoa: string;
    matricula: string;
    cargo_cedido: string;
  }
  commissionedAppointmentAct: {
    pessoa: string;
    cargo_efetivo: string;
    cargo_comissionado: string;
    orgao: string;
    matricula: string;
  }
  effectiveAppointmentAct: {
    pessoa: string;
    cargo: string;
    orgao: string;
    edital: string;
    matricula: string;
  }
  effectiveDischargeAct: {
    pessoa: string;
    cargo: string;
    orgao: string;
  }
  nonEffectiveDischargeAct: {
    pessoa: string;
    cargo: string;
    orgao: string;
  }
  permanenceSubscriptionAct: {
    pessoa: string;
    cargo: string;
    orgao: string;
  }
  rectificationAct: {
    pessoa: string;
    matricula: string;
  }
  retirementAct: {
    pessoa: string;
    cargo: string;
    orgao: string;
    matricula: string;
  }
  retirementNullificationAct: {
    pessoa: string;
    matricula: string;
    cargo: string;
    tipo_fonte_data: string;
    dodf_data: string;
    tipo_fonte_numero: string;
    dodf_numero: string;
  }
  reversionAct: {
    pessoa: string;
    matricula: string;
    cargo: string;
    orgao: string;
  }
  substitutionAct: {
    substituto: string;
    cargo_substituto: string;
    matricula_substituto: string;
    substituido: string;
    cargo_substituido: string
    matricula_substituido: string
  }
}