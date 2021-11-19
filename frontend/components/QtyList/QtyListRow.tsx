import {iWorkChunk} from '../../interfaces/WorkChunk';
import styles from '../../styles/QtyListRow.module.scss';
import ListRow from '../layout/ListRow';


interface QtyListRowProps {
    data: iWorkChunk
}

const QtyListRow = ({data}: QtyListRowProps) => {
    return (
        <ListRow>
            <div className={styles.text}>{data.text}</div>
            <div className={styles.qty}>{data.qty}</div>
        </ListRow>
    )
}

export default QtyListRow