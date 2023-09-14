import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    //   "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    // "name": "Mango",
    // "isOnline": true,
    // "id": 1812

    <ul className="friend-list">
      {friends.map(el => (
        <li className="item" key={el.id}>
          <span className="status"></span>
          <img className="avatar" src={el.avatar} alt={el.name} width="48" />
          <p className="name">{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
