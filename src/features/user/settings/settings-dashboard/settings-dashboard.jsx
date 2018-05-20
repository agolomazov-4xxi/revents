import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SettingsNav from '../settings-nav/settings-nav';
import BasicPage from './basic-page';
import AboutPage from './about-page';
import PhotosPage from './photos-page';
import AccountPage from './account-page';

const SettingsDashboard = () => {
	return (
		<Grid>
			<Grid.Column width={12}>
				<Switch>
					<Route path="/settings/basic" component={BasicPage} />
					<Route path="/settings/about" component={AboutPage} />
					<Route path="/settings/photos" component={PhotosPage} />
					<Route path="/settings/account" component={AccountPage} />
					<Redirect exact from="/settings" to="/settings/basic" />
				</Switch>
			</Grid.Column>
			<Grid.Column width={4}>
				<SettingsNav />
			</Grid.Column>
		</Grid>
	);
};

export default SettingsDashboard;
