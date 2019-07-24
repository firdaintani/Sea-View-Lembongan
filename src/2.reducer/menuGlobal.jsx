const INITIAL_STATE={
    menu:'Home'
}

export default (state=INITIAL_STATE, action)=>{
    if(action.type==='CHANGE_MENU'){
        return {...state, menu : action.payload}
    }
    else{
        return state
    }
}