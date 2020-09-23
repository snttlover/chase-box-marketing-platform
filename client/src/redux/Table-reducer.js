let ADD_POSITION = "ADD_POSITION";
let REMOVE_POSITION = "REMOVE_POSITION"; 
let REMOVE_ALL = "REMOVE_ALL"
let ADD_SUM = "ADD_SUM"
let REMOVE_SUM = "REMOVE_SUM"
let RESET_SUM = "RESET_SUM"


let initialState = {
    sum: 0,
    elementsData:[
    ]
}

export const tableReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_SUM:{
            state.sum+=action.newSum
        }break;
        case REMOVE_SUM:{
            debugger
            state.sum-=action.newSum.budjet
            state.sum-=action.newSum.cost

        }break;
        case RESET_SUM:{
            state.sum=0;
        }break;
        case ADD_POSITION:{
            state.elementsData.push(action.newPost)
        }break;
        case REMOVE_POSITION:{
            
            state.elementsData.splice(action.id,1);
            for(let i = 0; i<state.elementsData.length; i++){
                state.elementsData[i].id=i
            }
            
        }break;
        case REMOVE_ALL:{
            state.elementsData=[]
        }break;
    }
    return state
};

export const createPositionActionCreator = (newPost) => ({type: ADD_POSITION,newPost: newPost})
export const removePositionActionCreator = (id) => ({type: REMOVE_POSITION,id: id})
export const removeAllActionCreator = () => ({type: REMOVE_ALL})
export const addSumActionCreator = (newSum)=>({type: ADD_SUM, newSum: newSum})
export const removeSumActionCreator = (newSum)=>({type: REMOVE_SUM, newSum: newSum})
export const resetSumActionCreator = ()=>({type: RESET_SUM})

