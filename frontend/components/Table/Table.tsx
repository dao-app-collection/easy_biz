import styles from '../../styles/Table.module.scss';
import { iTable, iCell } from '../../interfaces/Table';
import { v4 as uuid } from 'uuid';
import { indexSort } from '../../utils/arrays';
import { useEffect, useState } from 'react';

interface TableProps {
    data?: iTable
}

const defaultTable: iTable = {
    rows: [{
        id: "defaultId",
        index: 0,
        cells: [{
            columnID: "defaultColumn",
            value: "one"
        }]
    }],
    columns: [{
        id: "defaultColumn",
        title: "No Data",
        index: 0,
        width: 1
    }],
    id: uuid(),
    title: "Default Table"
}


const Table = ( {data = defaultTable}: TableProps) => {
    const [columns, setColumns] = useState(data.columns);

    useEffect(() => {
        setColumns(indexSort(columns));
    }, [columns])

    const mapRows = () => {
        return data.rows.map( (row) => {
            return (
                <tr className={styles.row}>
                    {mapCells(row.cells)}
                </tr>
            )
        })
    }

    const mapCells = (cells: iCell[]) => {
        return cells.map( cell => {
            return <td className={styles.cell}>{cell.value}</td>
        });
    }

    const mapHead = () => {
        return data.columns.sort().map( column => {
            return (
                <td className={styles.cell}>{column.title}</td>
            )
        })
    }
 
    return (
        <div className={styles.table}>
            <h2>{data.title}</h2>
            <table>
                <tr className={styles.head}>
                    {mapHead()}
                </tr>
                {mapRows()}
            </table>
        </div>
    )
}

export default Table;