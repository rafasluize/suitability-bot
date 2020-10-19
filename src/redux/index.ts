import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { profileReducer } from './ducks/profile'
import { finishReducer } from './ducks/finish'

export const rootReducer = combineReducers({
  profileReducer,
  finishReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store

export type RootState = ReturnType<typeof rootReducer>
