import LabeledCard from '../layout/LabeledCard';
import { iWorkChunk, fakeWorkChunk } from '../../interfaces/WorkChunk';
import { arrOf } from '../../utils/arrays';
import styles from '../../styles/QtyList.module.scss';
import QtyListRow from './QtyListRow';
import  { useState } from 'react';

interface QtyListProps {
    data: iWorkChunk[]
}

const QtyList = ({data}: QtyListProps) => {
    const [rows, setRows] = useState(data);

    const mapRows = () => {
        return data.map( row => {
            return <QtyListRow data={row} />
        })
    }

    const sumRow = () => {
        let sum = data.reduce( (total, current) => total += current.qty, 0);
        return (
            <div className={styles.sumRow}>
                <div className={styles.sum}>{sum}</div>
            </div>
        )
    }
    
    return (
        <LabeledCard title={"title"}>
            <div className={styles.qtyList}>
                {sumRow()}
                {mapRows()}
            </div>
        </LabeledCard>
    )
}

export default QtyList