export interface ProcessRequestProps {
    startDate?: string;
    endDate?: string;
    numberProcess?: string;
};

export interface Process {
    numero: string;
    secretaria: string;
}

export interface Act {
    datePublication: string;
    text: string;
    type: string;
}