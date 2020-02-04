import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Root } from './src/screens/RootNavigator'
import createStore from './src/store'

const { store, persistor } = createStore()

console.disableYellowBox = true

export interface Props {}

const App: React.FC<Props> = props => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Root />
			</PersistGate>
		</Provider>
	)
}

export default App
