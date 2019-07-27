import React from 'react';
import {Col, Typography} from 'antd';
import {FaUserFriends, FaFighterJet, FaTrophy} from 'react-icons/fa';

const {Title} = Typography;

const BattleInstructions = () => {
	return (
		<React.Fragment>
			<Col className="gutter-row" span={8}>
				<div className="gutter-box">
					<div className="battle-title">
						<Title
							level={2}
							style={{
								marginTop: 25,
								textAlign: 'center',
								fontWeight: 300
							}}>
							Enter two Github users
						</Title>
						<FaUserFriends
							className="bg-light"
							color="rgb(235, 163, 31)"
							size={140}
						/>
					</div>
				</div>
			</Col>
			<Col className="gutter-row" span={8}>
				<div className="gutter-box">
					<div className="battle-title">
						<Title
							level={2}
							style={{
								marginTop: 25,
								textAlign: 'center',
								fontWeight: 300
							}}>
							Battle
						</Title>
						<FaFighterJet className="bg-light" color="rgb(235, 163, 31)" size={140} />
					</div>
				</div>
			</Col>
			<Col className="gutter-row" span={8}>
				<div className="gutter-box">
					<div className="battle-title">
						<Title
							level={2}
							style={{
								marginTop: 25,
								textAlign: 'center',
								fontWeight: 300
							}}>
							See the winner
						</Title>
						<FaTrophy className="bg-light" color="rgb(235, 163, 31)" size={140} />
					</div>
				</div>
			</Col>
		</React.Fragment>
	);
};

export default BattleInstructions;
