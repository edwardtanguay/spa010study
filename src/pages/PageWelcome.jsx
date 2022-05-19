import { useState } from 'react';

export const PageWelcome = () => {
	const [status, setStatus] = useState('offline');

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