import PropTypes from 'prop-types';
import { UserCard, Name, Image, Text,ListStats,StatsItem,Quantity } from './Profile.styled';
const Profile = ({ avatar, username, tag, location, stats }) => {
    const {followers, views, likes} = stats;
    return (
        <UserCard className="profile">
            <div className="description">
                <Image
                    src={avatar}
                    alt={username}
                
                className="avatar"
                />
                <Name className="name">{username}</Name>
                <Text className="tag">@{tag}</Text>
                <Text className="location">{location}</Text>
            </div>

            <ListStats className="stats">
                <StatsItem>
                    <span className="label">Followers</span>
                    <Quantity className="quantity">{followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <span className="label">Views</span>
                    <Quantity className="quantity">{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <span className="label">Likes</span>
                    <Quantity className="quantity">{likes}</Quantity>
                </StatsItem>
            </ListStats>
        </UserCard>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })

};

export default Profile;