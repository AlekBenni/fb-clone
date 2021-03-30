import {createStore, combineReducers} from 'redux'
import { allReducer } from './reducer'

const rootReducer = combineReducers ({
    all: allReducer
})

export const store = createStore(rootReducer)