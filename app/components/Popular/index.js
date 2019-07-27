import React from 'react';
import {List, Button} from 'antd';
import {fetchPopularRepos} from '../../service';
import ProfileCard from './Card';
import Loader from '../reusableComponents/Loader/index';
import {ThemeConsumer} from '../../context/themeContext';

class Popular extends React.Component {
	state = {
		selectedLanguage: 'All',
		repos: null,
		error: null,
		loading: true
	};

	componentDidMount() {
		this.getRepos();
	}

	getRepos = () => {
		fetchPopularRepos(this.state.selectedLanguage)
			.then(repos => {
				this.setState({
					repos
				});
			})
			.catch(error =>
				this.setState({
					error
				})
			);
	};

	updateLanguge = selectedLanguage => {
		this.setState(
			{
				repos: null,
				selectedLanguage
			},
			() => this.getRepos()
		);
	};

	render() {
		const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
		const {repos} = this.state;
		return (
			<ThemeConsumer>
				{({theme}) => (
					<React.Fragment>
						<div className={`${theme === 'light' ? 'light' : 'dark'} listItem`}>
							<List
								dataSource={languages}
								renderItem={item => (
									<List.Item>
										<Button
											type={`${
												item === this.state.selectedLanguage ? 'danger' : 'primary'
											}`}
											disabled={item === this.state.selectedLanguage}
											ghost
											onClick={() => this.updateLanguge(item)}>
											{item}
										</Button>
									</List.Item>
								)}
							/>
						</div>

						<div className="profile-card">
							{repos === null ? (
								<div className="sweet-loading">
									<Loader
										sizeUnit={'px'}
										size={15}
										color={'#1890ff'}
										loading={this.state.loading}
									/>
								</div>
							) : (
								repos !== null &&
								repos.map(repo => {
									return <ProfileCard repo={repo} key={repo.id} />;
								})
							)}
						</div>
					</React.Fragment>
				)}
			</ThemeConsumer>
		);
	}
}

export default Popular;
