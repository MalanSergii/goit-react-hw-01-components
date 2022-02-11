import PropTypes from 'prop-types';
import { List, Item, StatusOnline, StatusOffline,UserName} from "./FriendsList.styled";

const FriendList = (props) => {
    return (
        <List>
            {props.friends.map(({ avatar, name, isOnline, id }) => (
                <Item key={id}>
                    {isOnline ? <StatusOnline></StatusOnline>:<StatusOffline></StatusOffline>}
                    <img src={avatar} alt="User avatar" width="48" />
                    <UserName>{name}</UserName>
                </Item>
            ))}
        </List>
        )
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}
export default FriendList;