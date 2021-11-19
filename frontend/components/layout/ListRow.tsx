import {ReactNode} from 'react';
import styles from '../../styles/ListRow.module.scss';

interface ListRowProps {
    children: ReactNode | ReactNode[]
}

const ListRow = ({children}:ListRowProps) => {
    return (
        <div className={styles.listRow}>
            {children}
        </div>
    )
}

export default ListRow