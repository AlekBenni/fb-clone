
const initState = {
    user: null
}

export const allReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_USER':{
            return {...state, user : action.user}
        }
    default: return state
    }
}

export const addUserAC = (user) => ({type: 'ADD_USER', user})