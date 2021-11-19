import { v4 as uuid } from 'uuid';
import { arrOf } from '../utils/arrays';


// INTERFACES -----------------------------------------

export interface iTable {
    rows: iRow[],
    columns: iColumn[],
    title: string,
    id: string
}

export interface iRow {
    id: string,
    index: number,
    cells: iCell[]
}

export interface iCell {
    columnID: string
    value: string | number
}

export interface iColumn {
    id: string,
    title: string,
    index: number,
    width: number
}


// FAKERS -----------------------------------------

type FakeRow = (columns: number) => iRow
export const fakeRow:FakeRow = (index) => {
    return {
        id: uuid(),
        index: index,
        cells: []
    }
};

type FakeColumn = (index: number) => iColumn
export const fakeColumn:FakeColumn = (index) => {
    return {
        id: uuid(),
        title: `Column ${index}`,
        index: index,
        width: 1
    }
}

type FakeCells = (columns: iColumn[]) => iCell[]
export const fakeCells:FakeCells = (columns: iColumn[]) => {
    return columns.map( column => {
        return {
            columnID: column.id,
            value: "test"
        }
    })
}

type FakeTable = (title: string, numRows: number, numColumns: number) => iTable
export const fakeTable:FakeTable = (title, numRows, numColumns) => {
    let columns = arrOf(numColumns, fakeColumn);
    let rows = arrOf(numColumns, fakeRow);
    rows.forEach( row => {
        row.cells = fakeCells(columns);
    })
    
    let table = {
        rows: rows,
        columns: columns,
        title: title,
        id: uuid()
    }

    return table;
}