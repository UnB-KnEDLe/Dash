export enum AllTypeActs {
  permanenceSubscriptionAct = 'Abono de Permanência',
  retiramentAct = 'Aposentadoria',
  assignmentAct = 'Cessão',
}

export interface ItemActsProps {
  label: string;
  status: boolean;
}
export interface AllActsProps {
  permanenceSubscriptionAct: {
    name: ItemActsProps;
    charge: ItemActsProps;
    department: ItemActsProps;
  },
  retiramentAct: {
    name: ItemActsProps;
    charge: ItemActsProps;
    department: ItemActsProps;
    registration: ItemActsProps;
  },
  assignmentAct: {
    name: ItemActsProps;
    charge: ItemActsProps;
    registration: ItemActsProps;
  },

}

export const ALL_ACTS: AllActsProps = {
  permanenceSubscriptionAct: {
    name: {label:'Nome', status: false},
    charge: {label:'Cargo', status: false},
    department: {label:'Órgão', status: false},
  },
  retiramentAct: {
    name: {label:'Nome', status: false},
    charge: {label:'Cargo', status: false},
    department: {label:'Órgão', status: false},
    registration: {label:'Matrícula', status: false},
  },
  assignmentAct: {
    name: {label:'Nome', status: false},
    charge: {label:'Matrícula', status: false},
    registration: {label:'Cargo Cedido', status: false},
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