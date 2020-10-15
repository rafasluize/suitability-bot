import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { profileReducer } from './ducks/profile'
import { loadingReducer } from './ducks/loading'

export const rootReducer = combineReducers({
  profileReducer,
  loadingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store

export type RootState = ReturnType<typeof rootReducer>
