let CLOSE_INFO = "CLOSE_INFO"
let OPEN_INFO = "OPEN_INFO"
let INFO_TYPE = "INFO_TYPE"
let initialState={
    showModal:false,
    type:""
}


export const infoReducer = (state=initialState, action) => {

    switch(action.type){
        case OPEN_INFO:{
            
            state.showModal=true
            console.log(state.showModal);

        }break;
        case CLOSE_INFO:{
            
            state.showModal=false
        }break;
        case INFO_TYPE:{
            console.log(action.newType);
            
            state.type=action.newType;
            
        }break;
    }
    return state;
};

// export const sendDataActionCreator = (sendData) => ({type: SEND_DATA,sendData: sendData})
export const openInfoModalActionCreator = () => ({type: OPEN_INFO})
export const closeInfoModalActionCreator = () => ({type: CLOSE_INFO})
export const typeActionCreator = (newType) => ({type: INFO_TYPE, newType})
