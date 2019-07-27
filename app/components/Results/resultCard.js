import React from 'react';
import {
	FaCompass,
	FaBriefcase,
	FaUsers,
	FaUserFriends,
	FaUser
} from 'react-icons/fa';
import {Col, Card, List} from 'antd';

const {Meta} = Card;

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  }
}

const resultCard = ({header,subheader, avatar,href,name,profile, theme}) => {
	return (
		<Col className="gutter-row" span={6}>
			<h2
				style={{
					color:theme === 'light'? '#000':'#fff',
					textAlign: 'center'
				}}>
				{header}
			</h2>
			<Card
				hoverable
				cover={
					<img
						alt="example"
						src={avatar}
					/>
				}>
          {subheader}
				<Meta
					title={
						<a href={href} target="_blank">
							{name}
						</a>
					}
					description={
						<List className="resultClassList">
							<List.Item>
								<FaUser color="rgb(239, 115, 115)" size={22} />
								{profile.name}
							</List.Item>
							{profile.location && <List.Item>
								<FaCompass color="rgb(144, 115, 255)" size={22} />
								{profile.location}
              </List.Item> }
							{profile.company && <List.Item>
								<FaBriefcase color="#795548" size={22} />
								{profile.company}
              </List.Item> }
							<List.Item>
								<FaUsers color="rgb(129, 195, 245)" size={22} />
								{profile.followers.toLocaleString()} followers
							</List.Item>
							<List.Item>
								<FaUserFriends color="rgb(64, 183, 95)" size={22} />{profile.following.toLocaleString()} following
							</List.Item>
						</List>
					}
				/>
			</Card>
		</Col>
	);
};

export default resultCard;
