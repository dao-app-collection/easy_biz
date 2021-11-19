import { v4 as uuid } from 'uuid';
import { randomInt } from '../utils/arrays';

// INTERFACES -----------------------------------------

export interface iWorkChunk {
    id: string,
    invoiced: boolean,
    qty: number,
    text: string,
    // projectID: string,
    // date: Date
}

// FAKERS -----------------------------------------

type FakeWorkChunk = () => iWorkChunk
export const fakeWorkChunk: FakeWorkChunk = () => {
    return {
        id: uuid(),
        invoiced: randomInt(0, 1) > 0 ? false : true,
        qty: randomInt(0, 10) / 4,
        text: "Work Chunk"
    }
}