import React from 'react';
import {Card, List} from 'antd';
import {
	FaUser,
	FaStar,
	FaCodeBranch,
	FaExclamationTriangle
} from 'react-icons/fa';

const {Meta} = Card;

const ProfileCard = ({repo}) => {
	const {name, owner, html_url, stargazers_count, forks, open_issues} = repo;
	const {login, avatar_url} = owner;
	return (
		<Card
			hoverable
			style={{width: '22%'}}
			cover={<img alt="example" src={avatar_url} />}>
			<Meta
				title={
					<a href="avatar_url" target="_blank">
						{login}
					</a>
				}
				description={
					<List>
						<List.Item>
							<FaUser color="rgb(255, 191, 116)" size={18} />
							<a href={`https://github.com/${login}`}>{login}</a>
						</List.Item>
						<List.Item>
							<FaStar color="rgb(255, 215, 0)" size={22} />
							{stargazers_count.toLocaleString()} stars
						</List.Item>
						<List.Item>
							<FaCodeBranch color="rgb(129, 195, 245)" size={22} />
							{forks.toLocaleString()} forks
						</List.Item>
						<List.Item>
							<FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
							{open_issues.toLocaleString()} open
						</List.Item>
					</List>
				}
			/>
		</Card>
	);
};

export default ProfileCard;
