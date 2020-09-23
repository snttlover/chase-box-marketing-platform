
const MEASSAGE_TEXT = "MEASSAGE_TEXT";
const ADD_MEASSAGE = "ADD_MEASSAGE";
const FEEDBACK_TEXT = "FEEDBACK_TEXT";
const BREEF_TEXT = "BREEF_TEXT";

const CREATE_DIALOG = "CREATE_DIALOG";
let CLOSE_MODAL = "CLOSE_MODAL";
let OPEN_MODAL = "OPEN_MODAL";
let initialState={
    support:{
        messageText:"",
        messagesData: [

        ]
    },  
    feedback:{
        email:"",
        name:"",
        object:"",
        text:"",
        showModal: false
    },
    breef:{
        email:"",
        name:"",
        company:"",
        phone:"",
        tasks:"",
        instruments:"",
        showModal: false
    },
    isFetching: false
}


export const mainReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case MEASSAGE_TEXT:{
            state.support.messageText = action.newText;
        }break;
        case ADD_MEASSAGE:{
            state.support.messagesData.push(action.newMessage)
        }break;
        case CREATE_DIALOG: {
            
            state.support.messagesData = action.newData
        }break;
        case FEEDBACK_TEXT:{
            state.feedback.email = action.newText.email;
            state.feedback.name = action.newText.name;
            state.feedback.object = action.newText.object;
            state.feedback.text = action.newText.text;
        }break;
        case BREEF_TEXT:{
            state.breef.email = action.newText.email;
            state.breef.name = action.newText.name;
            state.breef.company = action.newText.company;
            state.breef.phone = action.newText.phone;
            state.breef.tasks = action.newText.tasks;
            state.breef.instruments = action.newText.instruments;

        }break;
        case OPEN_MODAL:{
            switch(action.path)
            {
                case 'breef':{
                    state.breef.showModal=true
                }break;
                case 'feedback':{
                    state.feedback.showModal=true
                }break;
            }
            
        }break;
        case CLOSE_MODAL:{
            switch(action.path)
            {
                case 'breef':{
                    state.breef.showModal=false
                }break;
                case 'feedback':{
                    state.feedback.showModal=false
                }break;
            }
        }break;
    }


    return state
};

export const createMessageActionCreator = (newMessage) => ({type: ADD_MEASSAGE,newMessage: newMessage})
export const createDialogActionCreator = (newData) => ({type: CREATE_DIALOG,newData: newData})
export const openModalActionCreator = (path) => ({type: OPEN_MODAL, path: path})
export const closeModalActionCreator = (path) => ({type: CLOSE_MODAL, path: path})
export const messageTextActionCreator = (newText) => ({type: MEASSAGE_TEXT,newText: newText})
export const feedbackTextActionCreator = (newText) => ({type: FEEDBACK_TEXT, newText: newText})
export const breefTextActionCreator = (newText) => ({type: BREEF_TEXT, newText: newText})

