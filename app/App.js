import React from 'react';
import {Typography, Button} from 'antd';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink
} from 'react-router-dom';
import {ThemeProvider} from './context/themeContext';
import Loader from './components/reusableComponents/Loader';

const {Title} = Typography;

const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle'));
const Results = React.lazy(() => import('./components/Results'));

export default class App extends React.Component {
	state = {
		theme: 'light',
		toggleTheme: () =>
			this.setState(({theme}) => ({
				theme: theme === 'light' ? 'dark' : 'light'
			}))
	};

	render() {
		return (
			<ThemeProvider value={this.state}>
				<Router>
					<div className={this.state.theme === 'light' ? 'light' : 'dark'}>
						<div className="container">
							<div className="app-nav">
								<Title
									level={2}
									style={{
										marginTop: 25
									}}>
									<NavLink to="/" exact activeClassName="active">
										Popular
									</NavLink>
								</Title>
								<Title
									level={2}
									style={{
										marginTop: 25
									}}>
									<NavLink to="/battle" activeClassName="active">
										Battle
									</NavLink>
									<Button
										onClick={this.state.toggleTheme}
										style={{
											background: 'none',
											boxShadow: 'none',
											border: '0',
											padding: 0,
											paddingLeft: 15,
											paddingRight: 15,
											textAlign: 'center'
										}}>
										{this.state.theme === 'light' ? '🔦' : '💡'}
									</Button>
								</Title>
							</div>
							<React.Suspense fallback={<Loader sizeUnit={'px'} size={15} color={'#1890ff'}/>}>
								<Switch>
									<Route exact path="/" component={Popular} />
									<Route exact path="/battle" component={Battle} />
									<Route path="/battle/results" component={Results} />
								</Switch>
							</React.Suspense>
						</div>
					</div>
				</Router>
			</ThemeProvider>
		);
	}
}
