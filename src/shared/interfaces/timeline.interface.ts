export interface ProcessRequestProps {
    dateRange?: string[];
    numberProcess?: string;
    direct: boolean;
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