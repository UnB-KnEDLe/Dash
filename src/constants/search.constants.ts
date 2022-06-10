export enum AllTypeActs {
  permanenceSubscriptionAct = 'Abono de Permanência',
  retiramentAct = 'Aposentadoria',
  assignmentAct = 'Cessão'
}

interface AllActsProps {
  permanenceSubscriptionAct: {
    name: string;
    charge: string;
    department: string;
  },
  retiramentAct: {
    name: string;
    charge: string;
    department: string;
    registration: string;
  },
  assignmentAct: {
    name: string;
    charge: string;
    registration: string;
  },

}

export const ALL_ACTS: AllActsProps = {
  permanenceSubscriptionAct: {
    name: 'Nome',
    charge: 'Cargo',
    department: 'Órgão',
  },
  retiramentAct: {
    name: 'Nome',
    charge: 'Cargo',
    department: 'Órgão',
    registration: 'Matrícula',
  },
  assignmentAct: {
    name: 'Nome',
    charge: 'Matrícula',
    registration: 'Cargo Cedido'
  },
}
interface RetirementActFilterProps {
  name: string;
  charge: string;
  department: string;
  registration: string;
}

export const RETIREMENT_ACT_FILTER: RetirementActFilterProps = {
  name: 'Nome',
  charge: 'Cargo',
  department: 'Órgão',
  registration: 'Matrícula'
}