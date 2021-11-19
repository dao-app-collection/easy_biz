import styles from '../../styles/LabeledCard.module.scss';
import { ReactNode } from 'react';

interface LabeledCardProps {
    children: ReactNode[] | ReactNode,
    title: string
}

const LabeledCard = ({children, title}: LabeledCardProps) => {
    return (
        <div className={styles.labeledCard}>
            <div className={styles.header}><h3>{title}</h3></div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default LabeledCard