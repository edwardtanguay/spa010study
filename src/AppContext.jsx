import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// data
	const message = 'from context';
	return (
		<AppContext.Provider value={{
			message
		}}>
			{children}
		</AppContext.Provider>
	);
};