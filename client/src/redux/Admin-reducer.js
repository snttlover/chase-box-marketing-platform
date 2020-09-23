const MESSAGE_TEXT = "MESSAGE_TEXT"
const USERS_DATA = "USERS_DATA"
const ACTUAL_USER = "ACTUAL_USER"
const CREATE_DIALOG = "CREATE_DIALOG"
const ADD_MEASSAGE = "ADD_MEASSAGE";
const ADD_NEW_USER = "ADD_NEW_USER"
let initialState={
    chat:{
        messageText:"",
        messagesData: [
        ],
        usersData: [
            // {username: "newuser@testcom"},
            // {username: "grigoryfashutdinov@gmailcom"},
            // {username: "cheezkidd@gmailcom"}
        ],
        actualUser:"cheezkidd@gmailcom"
    }
}


export const adminReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case MESSAGE_TEXT: {
            
            state.chat.messageText=action.newText
            
        }break;
        case USERS_DATA: {
            
            state.chat.usersData.push(action.newElement)
        }break;
        case ACTUAL_USER: {
            
            state.chat.actualUser = action.newUser
            state.chat.messagesData = []
        }break;
        case CREATE_DIALOG: {
            
            state.chat.messagesData = action.newData
        }break;
        case ADD_MEASSAGE:{
            
            // state.chat.messagesData.push(action.newMessage)
        }break;
        case ADD_NEW_USER: {
            
            state.chat.usersData.push(action.newUsers)
            
        }break
    }


    return state
};
export const createMessageActionCreator = (newMessage) => ({type: ADD_MEASSAGE,newMessage: newMessage})

export const messageTextActionCreator = (newText) => ({type: MESSAGE_TEXT,newText: newText})
export const newElementActionCreator = (newElement) => ({type: USERS_DATA,newElement: newElement})
export const changeActualUserActionCreator = (newUser) => ({type: ACTUAL_USER, newUser: newUser})
export const createDialogActionCreator = (newData) => ({type: CREATE_DIALOG,newData: newData})
export const addNewUserActionCreator = (newUsers) => ({type: ADD_NEW_USER,newUsers: newUsers})

