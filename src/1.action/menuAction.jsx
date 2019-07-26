export const changeMenu=(menuSelected)=>{
   
    return {
        type : 'CHANGE_MENU',
        payload : menuSelected
    }
}

export const changeRoom=(roomSelected)=>{
    return {
        type : 'CHANGE_ROOM',
        payload : roomSelected
    }
}