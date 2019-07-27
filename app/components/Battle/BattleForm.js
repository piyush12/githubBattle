import React, {Component} from 'react';
import {Input, Col, Alert, Avatar, Icon, Button} from 'antd';

const {Search} = Input;

export default class BattleForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			validate: false,
			username: null
		};
	}

	setUserName = value => {
		if (value === '') {
			this.setState({
				validate: true
			});
		} else {
			this.setState({
				validate: false,
				username: value
			});
			this.props.setUserName(value);
		}
	};

	closeUserBox = () => {
		this.setState({
			validate: false,
			username: null
		});
		this.props.setUserName(null);
	};

	render() {
		const {playerName, theme} = this.props;
		const {username} = this.state;
		return (
			<Col className="gutter-row" span={12}>
				<h2 style={{
					color:theme === 'light'? '#000':'#fff',
				}}>{playerName}</h2>
				<div className="gutter-box">
					<div>
						{username !== null ? (
							<div className="showUsername">
								<Avatar src={`https://github.com/${username}.png?size=200`} />
								<span className="userName">{username}</span>
								<Button
									type="primary"
									shape="circle"
									icon="close"
									size="large"
									onClick={this.closeUserBox}
								/>
							</div>
						) : (
							<Search
								placeholder="Github username"
								enterButton="Submit"
								size="large"
								onSearch={value => this.setUserName(value)}
							/>
						)}

						<br />
						<br />
						{this.state.validate && (
							<Alert message="Field cannot be blank" type="error" showIcon />
						)}
					</div>
				</div>
			</Col>
		);
	}
}
