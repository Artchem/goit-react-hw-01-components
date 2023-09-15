import { Friendlist } from './FriendList.styled';

export const FriendList = ({ children }) => {
  // console.log(friends);
  console.log(children);

  return <Friendlist>{children}</Friendlist>;
};
