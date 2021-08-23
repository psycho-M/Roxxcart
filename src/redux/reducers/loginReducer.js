const loginReducer = (state = false, action)=>{
    if(action.type === 'LOGIN'){
        console.log(state);
        return !state;
    }
    return state;
}

export default loginReducer