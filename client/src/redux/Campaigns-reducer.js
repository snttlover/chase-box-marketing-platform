// let ADD_POSITION = "ADD_POSITION";
// let REMOVE_POSITION = "REMOVE_POSITION";
// let REMOVE_ALL = "REMOVE_ALL"
let CREATE_CAMPAIGNS = "CREATE_CAMPAIGNS"
let ADD_CAMPAIGN = "ADD_CAMPAIGN"
let REMOVE_CAMPAIGN = "REMOVE_CAMPAIGN"
let OPEN_MODAL_CAMP = "OPEN_MODAL_CAMP"
let CLOSE_MODAL_CAMP = "CLOSE_MODAL_CAMP"
let CAMP_TEXT = "CAMP_TEXT"
let LOADING = "LOADING"

let initialState = {
    sum: 0,
    orders: 0,
    actives: 0,
    campaignId: 0,

    camps: [

    ],
    showModal: false,
    budjet: '',
    time: '',
    num: '',
    modalId: 0,
    loading: false

}

export const campaignsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CAMP_TEXT: {
            state.budjet = action.newText.budjet
            state.time = action.newText.time
            state.num = action.newText.num

        }
        case OPEN_MODAL_CAMP:{
            
            state.showModal=true
            state.modalId=action.id
            
        }break;
        case CLOSE_MODAL_CAMP:{
            
            state.showModal=false
        }break;
        case LOADING:{
            state.loading=true
        }break;
        case CREATE_CAMPAIGNS: {
            
            state.camps = action.newData
            console.log(state.camps);

        } break;
        case ADD_CAMPAIGN: {
            let allTable = action.newData
            
            for (let i = 0; i < action.newData.length; i++) {
                delete allTable[i]["id"]
                delete allTable[i]["name"]
                delete allTable[i]["positions"]
                if (allTable[i].time === "...") {
                    delete allTable[i]["time"]
                    allTable[i]["date"] = "..."
                } else {

                    let today = new Date()
                    let date = new Date()
                    if (allTable[i].section === "SEO") {
                        
                        console.log(today.getMonth());
                        console.log(parseInt(today.getMonth()));
                        console.log(allTable[i].time);
                        console.log(parseInt(today.getMonth()) + parseInt(allTable[i].time));

                        date.setMonth(parseInt(today.getMonth()) + parseInt(allTable[i].time))
                        console.log(date.getMonth());
                        

                    } else {
                        date.setDate(today.getDate() + (allTable[i].time * 7))
                    }
                    
                    let month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : ("0" + parseInt(date.getMonth() + 1));
                    let day = (date.getDate()) > 10 ? (date.getDate()) : ("0" + date.getDate());
                    let year = date.getFullYear();
                    // console.log(day+"."+month+"."+year);
                    let campDate = day + "." + month + "." + year
                    delete allTable[i]["time"]
                    allTable[i]["date"] = campDate
                }
                state.camps.push(allTable[i])
            }
            console.log(state.camps);
            console.log(action.newData);
            // let activePositions=localStorage.getItem('activePositions')
            // localStorage.setItem('activePositions', state.camps.length-1)
            let activePositions;
            
            
            // state.camps.push(action.newData)
            // console.log(state.camps);

        } break;
        case REMOVE_CAMPAIGN: {

            let pos = action.newData
            state.camps.splice(pos, 1)
            for (let i = 0; i < state.camps.length; i++) {
                state.camps[i].id = i
            }

        } break;
        // case ADD_POSITION:{
        //     state.elementsData.push(action.newPost)
        // }break;
        // case REMOVE_POSITION:{

        //     state.elementsData.splice(action.id,1);
        //     for(let i = 0; i<state.elementsData.length; i++){
        //         state.elementsData[i].id=i
        //     }

        // }break;
        // case REMOVE_ALL:{
        //     state.elementsData=[]
        // }break;
    }
    return state
};
export const createCampaignsActionCreator = (newData) => ({ type: CREATE_CAMPAIGNS, newData: newData })
export const addCampaignActionCreator = (newData) => ({ type: ADD_CAMPAIGN, newData: newData })
export const removeCampaignActionCreator = (newData) => ({ type: REMOVE_CAMPAIGN, newData: newData })
export const openModalActionCreator = (newId) => ({type: OPEN_MODAL_CAMP, id: newId})
export const closeModalActionCreator = () => ({type: CLOSE_MODAL_CAMP})
export const campaignTextActionCreator = (newText) => ({type: CAMP_TEXT, newText: newText})
export const loadingActionCreator = () => ({type: LOADING})


// export const createPositionActionCreator = (newPost) => ({type: ADD_POSITION,newPost: newPost})
// export const removePositionActionCreator = (id) => ({type: REMOVE_POSITION,id: id})
// export const removeAllActionCreator = () => ({type: REMOVE_ALL})