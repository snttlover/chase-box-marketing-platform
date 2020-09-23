
const SET_ERROR = "SET_ERROR"
const VERIFY = "VERIFY"

let initialState={
    isVerified: false,
    error: ""
}


export const authReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case SET_ERROR: {
            
            state.error=action.newMessage
            
        }break;
        case VERIFY: {
            
            state.isVerified=action.newData
            
        }break;
    }


    return state
};
export const setErrorActionCreator = (newMessage) => ({type: SET_ERROR,newMessage: newMessage})
export const verifyActionCreator = (newData) => ({type: VERIFY,newData: newData})



