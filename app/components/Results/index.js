import React, {Component} from 'react';
import {Row} from 'antd';
import {battle} from '../../service';
import ResultCard from './resultCard';
import Loader from '../reusableComponents/Loader/index';
import {ThemeConsumer} from '../../context/themeContext';

export default class Result extends Component {
	state = {
		winner: null,
		loser: null,
		error: null,
		loading: true
	};

	componentDidMount() {
		const getUrlParams = new URLSearchParams(this.props.location.search);
		const playerOne = getUrlParams.get('playerOne');
		const playerTwo = getUrlParams.get('playerTwo');

		battle([playerOne, playerTwo])
			.then(players => {
				this.setState({
					winner: players[0],
					loser: players[1],
					error: null,
					loading: false
				});
			})
			.catch(({message}) => {
				this.setState({
					error: message,
					loading: false
				});
			});
	}

	render() {
		const {winner, loser, error, loading} = this.state;

		if (loading) {
			return (
				<Loader sizeUnit={'px'} size={15} color={'#1890ff'} loading={loading} />
			);
		}

		return (
			<ThemeConsumer>
				{({theme}) => (
					<Row
						gutter={16}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						{winner && (
							<ResultCard
								theme={theme}
								header={winner.score === loser.score ? 'Tie' : 'Winner'}
								subheader={`Score: ${winner.score.toLocaleString()}`}
								avatar={winner.profile.avatar_url}
								href={winner.profile.html_url}
								name={winner.profile.login}
								profile={winner.profile}
							/>
						)}

						{loser && (
							<ResultCard
								theme={theme}
								header={winner.score === loser.score ? 'Tie' : 'Loser'}
								subheader={`Score: ${loser.score.toLocaleString()}`}
								avatar={loser.profile.avatar_url}
								href={loser.profile.html_url}
								name={loser.profile.login}
								profile={loser.profile}
							/>
						)}
					</Row>
				)}
			</ThemeConsumer>
		);
	}
}
