import { arrOf } from '../../utils/arrays';
import styles from '../../styles/List.module.scss';
import  { useState } from 'react';

interface ListProps {
    data: any[]
}

const List = ({data}: ListProps) => {
    const [rows, setRows] = useState(data);

    const mapRows = () => {
        return data.map( row => {
            return <li>{row.toString()}</li>
        });
    }
    
    return (
        <div className={styles.listContainer}>
            <div className={styles.header}><h3>Title</h3></div>
            <ul className={styles.list}>
                {mapRows()}
            </ul>
        </div>
    )
}

export default List