import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Row, Button} from 'antd';
import BattleForm from './BattleForm';
import BattleInstructions from './BattleInstructions';
import {ThemeConsumer} from '../../context/themeContext';

const {Title} = Typography;

class Battle extends Component {
	state = {
		playerOne: null,
		playerTwo: null
	};

	userName = (playerNum, userName) => {
		if (userName !== '') {
			this.setState({
				[playerNum]: userName
			});
		}
	};

	render() {
		const {playerOne, playerTwo} = this.state;
		return (
			<ThemeConsumer>
				{({theme}) => (
					<React.Fragment>
						<div className="battleTitle">
							<Title
								level={2}
								style={{
									color: theme === 'light' ? '#000' : '#fff',
									marginTop: 25,
									textAlign: 'center',
									fontWeight: 300
								}}>
								Instructions
							</Title>
						</div>

						<div className="gutter-example">
							<Row gutter={16}>
								<BattleInstructions />
							</Row>

							<Row gutter={16}>
								<div className="battleTitle">
									<Title
										level={2}
										style={{
											color: theme === 'light' ? '#000' : '#fff',
											marginTop: 25,
											textAlign: 'center',
											fontWeight: 300
										}}>
										Players
									</Title>
								</div>
								<br />
								<BattleForm
									theme={theme}
									playerName="Player 1"
									setUserName={player => this.userName('playerOne', player)}
								/>
								<BattleForm
									theme={theme}
									playerName="Player 2"
									setUserName={player => this.userName('playerTwo', player)}
								/>
								<br />

								{playerOne !== null && playerTwo !== null && (
									<Link
										className="ant-btn ant-btn-primary ant-btn-block"
										to={{
											pathname: '/battle/results',
											search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
										}}>
										Battle
									</Link>
								)}
							</Row>
						</div>
					</React.Fragment>
				)}
			</ThemeConsumer>
		);
	}
}

export default Battle;
