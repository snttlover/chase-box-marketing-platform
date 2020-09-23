const SET_NAME = "SET_NAME"
const UPDATE = "UPDATE"
const SHOW_SIDEBAR = "SHOW_SIDEBAR"
const ACTIVE_POSITIONS = "ACTIVE_POSITIONS"

let initialState = {
    header: {
        name: "",
        showSidebar: false,
        notification: true,
        sum: 0,
        allPositions: 0,
        activePositions: 0
    }
}


export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME: {
            state.header.name = action.newName
        }break;
        case UPDATE: {
            
        }break;
        case SHOW_SIDEBAR: {
            
            state.header.showSidebar = !state.header.showSidebar
        }break;
        case ACTIVE_POSITIONS: {
            
            state.header.allPositions++
        }break;
    }
    return state
};

export const nameActionCreator = (newName) => ({type: SET_NAME, newName: newName})
export const updateActionCreator = () => ({type: UPDATE})
export const showSidebarActionCreator = () => ({type: SHOW_SIDEBAR})
export const activePositionsActionCreator = () => ({type: ACTIVE_POSITIONS})

