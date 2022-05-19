import { useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
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