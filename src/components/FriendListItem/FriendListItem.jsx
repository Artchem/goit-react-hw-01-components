import PropTypes from 'prop-types';
import { Item, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  //   console.log(friends);

  return friends.map(el => (
    <Item key={el.id}>
      <Status $status={el.isOnline} status="true"></Status>
      <img className="avatar" src={el.avatar} alt={el.name} width="48" />
      <Name>{el.name}</Name>
    </Item>
  ));
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  //   status: PropTypes.bool,
};
