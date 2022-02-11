import PropTypes from 'prop-types';
import { Table, TableHead, TableR} from "./TransactionHistory.styled";


const TransactionHistory = (props) => {
    console.log(props.history.length);
    return (
        <Table>
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>
            <tbody>
                {props.history.map(({ id, type, amount, currency }) => ( 
                    <TableR key={id} >
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TableR>
                ))}
            </tbody>
        </Table>
    )
}
TransactionHistory.propTypes={
    history: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
}
export default TransactionHistory;