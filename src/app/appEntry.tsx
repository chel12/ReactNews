import React from 'react';
import ReactDOM from 'react-dom/client';
import '../shared/index.css';
import { ThemeProvider } from './providers/ThemeProvider';
import { store } from './appStore';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<RouterProvider router={appRouter} />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
