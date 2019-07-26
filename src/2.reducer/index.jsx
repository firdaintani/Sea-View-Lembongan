import {combineReducers} from 'redux'
import menuGlobal from './menuGlobal.js'
import roomGlobal from './roomGlobal'

export default combineReducers({
    menu : menuGlobal,
    room : roomGlobal
})