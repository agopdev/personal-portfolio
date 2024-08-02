import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';

import Index from './routes/Index';
import Error from './routes/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppNavbar />,
		children: [
			{
				path: '/',
				index: true,
				element: <Index />,
			},
		],

		errorElement: <Error />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
