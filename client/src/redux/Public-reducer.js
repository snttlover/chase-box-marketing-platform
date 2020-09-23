let CLOSE_MODAL = "CLOSE_MODAL"
let OPEN_MODAL = "OPEN_MODAL"
let CLOSE_REMOVE_MODAL = "CLOSE_REMOVE_MODAL"
let OPEN_REMOVE_MODAL = "OPEN_REMOVE_MODAL"

let CHANGE_TYPE="CHANGE_TYPE"
let YA_TEXT = "YA_TEXT"
let VK_TEXT = "VK_TEXT"
let FB_TEXT = "FB_TEXT"
let GOOGLE_TEXT ="GOOGLE_TEXT"
let MYTARGET_TEXT ="MYTARGET_TEXT"


let CREATE_CABINETS = "CREATE_CABINETS"
let ADD_CABINET = "ADD_CABINET"
let REMOVE_CABINET = "REMOVE_CABINET"
// import axios from 'axios'

let initialState={
    infoModal: false,
    showModal: false,
    cabinetId: 0,
    showRemoveModal: false,

    typeCabinet: "",
    cabinets:[
        
    ],
    yandex:{
        name: "",
        email: "",
        number: "",
        yourEmail: "",
        checked: false
    },
    vk:{
        link: ""
    },
    fb:{
        link: ""
    },
    google:{
        email:"",
        checked:  false
    },
    myTarget:{
        email:"",
        checked:  false
    }

}


export const publicReducer = (state=initialState, action) => {

    switch(action.type){
        case OPEN_MODAL:{
            
            state.showModal=true
            
        }break;
        case CLOSE_MODAL:{
            
            state.showModal=false
        }break;
        case OPEN_REMOVE_MODAL:{
            state.cabinetId=action.id
            
            state.showRemoveModal=true
            
        }break;
        case CLOSE_REMOVE_MODAL:{
            
            state.showRemoveModal=false
        }break;
        case CHANGE_TYPE:{
            
            state.typeCabinet=action.newType;
            
        }break;
        case YA_TEXT:{
            
            state.yandex.name=action.newText.name;
            state.yandex.email=action.newText.email;
            state.yandex.yourEmail=action.newText.yourEmail;
            state.yandex.checked=action.newText.checked;
            state.yandex.number=action.newText.number;
            
        }break;
        case VK_TEXT:{
            
            state.vk.link=action.newText;
            
        }break;
        case FB_TEXT:{
            
            state.fb.link=action.newText;
            
        }break;
        case GOOGLE_TEXT:{
            
            state.google.email=action.newText.email;
            state.google.checked=action.newText.checked;

            
        }break;
        case MYTARGET_TEXT:{
            
            state.myTarget.email=action.newText.email;
            state.myTarget.checked=action.newText.checked;

            
        }break;
        case CREATE_CABINETS:{
            state.cabinets = action.newData
            console.log(state.cabinets);
            
        }break;
        case ADD_CABINET:{
            state.cabinets.push(action.newData)
            console.log(state.cabinets);
            
        }break;
        case REMOVE_CABINET:{
            
            let pos = action.newData
            state.cabinets.splice(pos, 1)
            for(let i = 0; i<state.cabinets.length; i++){
                state.cabinets[i].id=i
            }

        }break;
    }
    return state;
};

// export const sendDataActionCreator = (sendData) => ({type: SEND_DATA,sendData: sendData})
export const openModalActionCreator = () => ({type: OPEN_MODAL})
export const closeModalActionCreator = () => ({type: CLOSE_MODAL})
export const closeRemoveModalActionCreator = () => ({type: CLOSE_REMOVE_MODAL})
export const openRemoveModalActionCreator = (id) => ({type: OPEN_REMOVE_MODAL, id: id})

export const changeTypeActionCreator = (newType) => ({type: CHANGE_TYPE, newType: newType})
export const yaTextActionCreator = (newText) => ({type: YA_TEXT, newText: newText})
export const vkTextActionCreator = (newText) => ({type: VK_TEXT, newText: newText})
export const fbTextActionCreator = (newText) => ({type: FB_TEXT, newText: newText})
export const googleTextActionCreator = (newText) => ({type: GOOGLE_TEXT, newText: newText})
export const myTargetTextActionCreator = (newText) => ({type: MYTARGET_TEXT, newText: newText})


export const createCabinetsActionCreator = (newData) => ({type: CREATE_CABINETS,newData: newData})
export const addCabinetActionCreator = (newData) => ({type: ADD_CABINET,newData: newData})
export const removeCabinetActionCreator = (newData) => ({type: REMOVE_CABINET,newData: newData})




