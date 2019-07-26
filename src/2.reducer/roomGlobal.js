const INITIAL_STATE={
    room_type:''
}

export default (state=INITIAL_STATE, action)=>{
    if(action.type==='CHANGE_ROOM'){
        return {...state, room_type : action.payload}
    }
    else{
        return state
    }
}