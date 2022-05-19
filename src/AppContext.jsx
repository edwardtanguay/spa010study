import { useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children, logging }) => {
	const [status, setStatus] = useState('offline');

	return (
		<AppContext.Provider value={{
			status,
			setStatus,
		}}>
			{children}
		</AppContext.Provider>
	);
};