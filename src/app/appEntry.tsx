import React from 'react';
import ReactDOM from 'react-dom/client';
import '../shared/index.css';
import { ThemeProvider } from './providers/ThemeProvider';
import { store } from './appStore';
import { Provider } from 'react-redux';
import BaseLayout from './layouts/BaseLayout';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<BaseLayout />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
