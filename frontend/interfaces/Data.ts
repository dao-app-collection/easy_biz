export interface Client {
    name: string,
    id: number,
    address: string,
    email: string,
}

export interface Project {
    title: string,
    id: number,
    feeStructure?: string,
    ClientId: number
}

export interface Deadline {
    id: number,
    title: string,
    date: Date,
    ProjectId: number
}