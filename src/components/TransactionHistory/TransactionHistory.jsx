import PropTypes from 'prop-types';
import { Table, Td, Th, Thead, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  //   const { id, type, amount, currency } = item;
  //   console.log(items);
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>

      <tbody>
        {items.map(el => (
          <Tr key={el.id}>
            <Td>{el.type}</Td>
            <Td>{el.amount}</Td>
            <Td>{el.currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
