import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const { status, setStatus } = useContext(AppContext);
	
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			<div>
				<div>{status}</div>
				<button onClick={() => setStatus(status === 'online' ? 'offline' : 'online')}>Toggle Status</button>
			</div>
		</div>
	)
}