import styles from '../../styles/Container.module.scss';
import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode | ReactNode[],
    columns?: number
}

const Container = ({children, columns = 1}: ContainerProps) => {

    const columnsString = () => {
        let arr = [];
        for (var i = 0; i < columns; i++) {
            arr.push("1fr");
        }
        return arr.join(" ");
    }

    return (
        <div className={styles.container} style={{gridTemplateColumns: columnsString()}}>
            {children}
        </div>
    )
}

export default Container