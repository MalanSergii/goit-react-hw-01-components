import PropTypes from 'prop-types';
import { Stats,Title, List, Item, Persentage} from "./Statistics.styled"

const Statistics = ({ stats, title }) => {
    return (
        <Stats>
            {title && <Title>{title}</Title>}

            <List>
                {stats.map(({id, label, percentage }) => (
                   <Item key={id}>
                        <span>{label}</span>
                        <Persentage>{percentage}%</Persentage>
                    </Item>  
                ))}
            </List>
        </Stats>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
}


export default Statistics;
