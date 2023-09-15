import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Description,
  Item,
  Location,
  Name,
  Stats,
  Tag,
} from './Profile.styled';

export const Profile = props => {
  // console.log(props);
  const {
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;
  return (
    <Card key="1">
      <Description>
        <Avatar src={props.avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <span className="label">Followers</span>
          <span className="quantity">
            <b>{followers}</b>
          </span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity">
            <b>{views}</b>
          </span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity">
            <b>{likes}</b>
          </span>
        </Item>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
  //   followers: PropTypes.number,
  //   views: PropTypes.number,
  //   likes: PropTypes.number,
  // },
};
