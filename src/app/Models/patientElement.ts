export interface medications {
    id?: number,
    name?: string,
    dosage?: string,
    drugRoute?: string,
    frequency?: string,
    daytimeSchedule?: string,
    afternoonSchedule?: string,
    nigthSchedule?: string
}

export interface patientElement {
    id: number,
    name?: string;
    numberIdentification?: string;
    room?: string;
    company?: string;
    medications: medications[]
}