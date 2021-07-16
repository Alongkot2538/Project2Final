import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './index.store'

function setStore() {
	if (process.env.NODE_ENV === 'production') {
		const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk))
		(
			createStore
		)
		return createStoreWithMiddleware(reducers, {})
	}
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	return createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))
}

const store = setStore()

export default store
