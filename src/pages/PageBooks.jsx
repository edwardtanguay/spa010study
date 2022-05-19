import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { status } = useContext(AppContext);

	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>This is the book page.</p>
			{status === 'online' ? (
				<p>Hello, I'm available for chat.</p>
			) : (
				<p>Sorry, I'm not online at the moment.</p>
			)}
		</div>
	);
};
