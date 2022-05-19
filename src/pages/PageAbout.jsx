import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageAbout = () => {
	const { status } = useContext(AppContext);

	return (
		<div className="page_about">
			<h2>About</h2>
			<p>This is some info about the site.</p>
			<p>User is currently: {status}</p>
		</div>
	)
}