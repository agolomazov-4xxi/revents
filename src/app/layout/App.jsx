import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/event-dashboard/event-dashboard';
import Navbar from '../../features/nav/navbar/navbar';
import EventDetailedPage from '../../features/event/event-detailed/event-detailed-page';
import EventForm from '../../features/event/event-form/event-form';
import SettingsDashboard from '../../features/user/settings/settings-dashboard/settings-dashboard';
import UserDetailedPage from '../../features/user/user-detailed/user-detailed-page';
import PeopleDashboard from '../../features/user/people-dashboard/people-dashboard';
import HomePage from '../../features/home/home-page';
import TestComponent from '../../features/testarea/test-component';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Switch>
					<Route path="/" exact component={HomePage} />
				</Switch>
				<Route
					path="/(.+)"
					render={() => (
						<Fragment>
							<Navbar />
							<Container className="main">
								<Switch>
									<Route path="/events" component={EventDashboard} />
									<Route path="/test" component={TestComponent} />
									<Route path="/event/:id" component={EventDetailedPage} />
									<Route path="/people" component={PeopleDashboard} />
									<Route path="/profile/:id" component={UserDetailedPage} />
									<Route path="/settings" component={SettingsDashboard} />
									<Route path="/create-event" component={EventForm} />
								</Switch>
							</Container>
						</Fragment>
					)}
				/>
			</Fragment>
		);
	}
}

export default App;
