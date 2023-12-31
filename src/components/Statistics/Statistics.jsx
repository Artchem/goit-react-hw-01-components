import PropTypes from 'prop-types';
import {
  Container,
  Item,
  Percentage,
  Statlist,
  Title,
} from './Statistics.styled.js';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <Statlist>
        {stats.map(el => (
          <Item key={el.id}>
            <span className="label">{el.label}</span>
            <Percentage>{el.percentage}</Percentage>
          </Item>
        ))}
      </Statlist>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
