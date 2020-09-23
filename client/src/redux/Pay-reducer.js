let CLOSE_MODAL = "CLOSE_MODAL"
let OPEN_MODAL = "OPEN_MODAL"
let YA_TEXT = "YA_TEXT"
let VK_TEXT = "VK_TEXT"
let FB_TEXT = "FB_TEXT"
let GOOGLE_TEXT ="GOOGLE_TEXT"
let MYTARGET_TEXT ="MYTARGET_TEXT"
// import axios from 'axios'
let CREATE_CABINETS = "CREATE_CABINETS"
let NEW_CABINET = "NEW_CABINET"
let CHANGE_PERS = "CHANGE_PERS"



let initialState={
    newType: "main",
    showModal: false,
    payPerson: "phys",
    cabs:[
        
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


export const payReducer = (state=initialState, action) => {

    switch(action.type){
        case CHANGE_PERS: {
            state.payPerson=action.newData
            state.showModal=false

        }break;
        case OPEN_MODAL:{
            
            state.newType=action.newType
            state.showModal=true
        }break;
        case CLOSE_MODAL:{
            
            state.showModal=false
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
            state.cabs = action.newData
            
        }break;
        case NEW_CABINET:{
            
            state.cabs.push(action.newData)
            

        }break;
    }
    return state;
};

// export const sendDataActionCreator = (sendData) => ({type: SEND_DATA,sendData: sendData})
export const openModalActionCreator = (newType) => ({type: OPEN_MODAL, newType: newType})
export const closeModalActionCreator = () => ({type: CLOSE_MODAL})

export const yaTextActionCreator = (newText) => ({type: YA_TEXT, newText: newText})
export const vkTextActionCreator = (newText) => ({type: VK_TEXT, newText: newText})
export const fbTextActionCreator = (newText) => ({type: FB_TEXT, newText: newText})
export const googleTextActionCreator = (newText) => ({type: GOOGLE_TEXT, newText: newText})
export const myTargetTextActionCreator = (newText) => ({type: MYTARGET_TEXT, newText: newText})

export const createCabinetsActionCreator = (newData) => ({type: CREATE_CABINETS,newData: newData})
export const payCabinetActionCreator = (newData) => ({type: NEW_CABINET,newData: newData})
export const changePersActionCreator = (newData) => ({type: CHANGE_PERS,newData: newData})
