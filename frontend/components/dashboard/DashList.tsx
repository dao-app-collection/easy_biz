import { Client, Project, Deadline } from '../../interfaces/Data';
import styles from '../../styles/DashList.module.scss';
import LabeledCard from '../layout/LabeledCard';
import ListRow from '../layout/ListRow';

interface DashListProps {
    data: Client[] | Project[] | Deadline[],
    title: string
}

const DashList = ({data, title}: DashListProps) => {
    
    const mapItems = () => {
        return data.map( item => {
            if ( "name" in item )
                return <ListRow><div>{item.name}</div></ListRow>;
            else 
                return <ListRow><div>{item.title}</div></ListRow>
        });
    }

    return (
        <LabeledCard title={title}>
            {mapItems()}
        </LabeledCard>
    )
}

export default DashList